import connectDB from '@/config/database';
import User from '@/models/User';

import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // غالبًا مش محتاج تخصيص authorization هنا، الافتراضي بيكفي
    }),
  ],
  session: { strategy: 'jwt' }, // يفضل تحدد الاستراتيجية
  debug: true, // يطبع في اللوج أي Error
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        // 1. اتأكد إن فيه إيميل
        const email = profile?.email || user?.email;
        if (!email) {
          console.error("signIn: no email in profile");
          return false;
        }

        // 2. جهّز اسم آمن
        const username =
          (profile?.name ||
            profile?.given_name ||
            email.split('@')[0]).slice(0, 20);

        // 3. Connect DB
        await connectDB();

        // 4. دور على المستخدم
        const existingUser = await User.findOne({ email }).lean();

        if (!existingUser) {
          await User.create({
            email,
            username,
            image: profile?.picture || user?.image || null,
          });
        }

        return true;
      } catch (err) {
        console.error("signIn error:", err);
        return false;
      }
    },

    async session({ session }) {
      try {
        if (!session?.user?.email) return session;

        await connectDB();
        const user = await User.findOne({ email: session.user.email }).lean();

        if (user?._id) {
          session.user.id = user._id.toString();
        }

        return session;
      } catch (err) {
        console.error("session callback error:", err);
        return session;
      }
    },
  },
};
