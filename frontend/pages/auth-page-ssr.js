import nookies from 'nookies';
import { tokenService } from '../src/services/auth/tokenService';

export async function getServerSideProps(ctx) {
    const cookies = nookies.get(ctx);
    console.log('cookies', cookies);

    return {
        props: {
          token: tokenService.get(ctx),
        },
      };
};

export default function AuthPageSSR(props){
    return (
        <div>
        <h1>The Auth Page - {props.appName}</h1>
        <pre>
          {JSON.stringify(props, null, 2)}
        </pre>
        </div>
    )
}