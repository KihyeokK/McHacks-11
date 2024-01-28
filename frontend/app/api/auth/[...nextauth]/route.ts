import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
    // session:{
    //     strategy: "jwt",
    // },
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
            authorization: {
                params: {
                prompt: "consent",
                },
            },
        }),
    ],
    database: process.env.DATABASE_URL,
};

export const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};