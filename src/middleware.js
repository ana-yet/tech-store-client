// middleware.js
import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    authorized({ token, req }) {
      // console.log("Middleware triggered for:", req.nextUrl.pathname);
      return !!token;
    },
  },
});

export const config = {
  matcher: ["/dashboard/:path*"],
};
