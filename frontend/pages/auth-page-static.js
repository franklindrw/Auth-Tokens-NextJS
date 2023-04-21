import useSession from "../src/hooks/useSession";
import { useRouter } from 'next/router';
import { tokenService } from "../src/services/auth/tokenService";

export default function AuthPageStatic(props){
  const session = useSession();
  const router = useRouter();
  
  if(!session || session.error){
    router.push('/?error=401');
  }

  const logout = () => {
    tokenService.delete();
    router.push('/');
  };

    return (
        <div>
        <h1>The Auth Page Static</h1>
        <pre>
          {JSON.stringify(session, null, 2)}
        </pre>
        <button onClick={logout}>Sair</button>
        </div>
    )
}
