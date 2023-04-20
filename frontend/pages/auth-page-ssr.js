import { withSession } from '../src/services/auth/session';

export const getServerSideProps = withSession((ctx) => {
  return {
    props: {
      session: ctx.session,
    }
  }
});

// export async function getServerSideProps(ctx) {
//   try{
//     const session = await authService.getSession(ctx);
//     console.log(session)
//     return {
//         props: {
//           session,
//         },
//       };
//   } catch (err) {
//     return {
//       redirect: {
//         destination: '/?error=401',
//         permanent: false,
//       },
//     };
//   }
// };

export default function AuthPageSSR(props){
  
    return (
        <div>
        <h1>The Auth Page - Server Side</h1>
        <pre>
          {JSON.stringify(props, null, 2)}
        </pre>
        </div>
    )
}