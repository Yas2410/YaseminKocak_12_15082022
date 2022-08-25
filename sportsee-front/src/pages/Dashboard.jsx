import { useFetch } from "../hook/useFetch";
import { useParams } from "react-router-dom";
import WelcomeUser from "../components/WelcomeUser";

export default function Dashboard(userId) {
  userId = useParams().id;
  const { data, loading } = useFetch(`${userId}.json`);

  return (
    <>
      {loading ? (
        <div></div>
      ) : data ? (
        <>
          <WelcomeUser />
        </>
      ) : (
        <div></div>
      )}
    </>
  );
}
