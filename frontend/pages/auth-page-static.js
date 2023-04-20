import useSession from "../src/hooks/useSession";
import { useRouter } from 'next/router';

export default function AuthPageStatic(props){
  const session = useSession();
  const router = useRouter();
  
  if(!session || session.error){
    router.push('/?error=401');
  }

    return (
        <div>
        <h1>The Auth Page Static</h1>
        <pre>
          {JSON.stringify(session, null, 2)}
        </pre>
        </div>
    )
}
