//J'importe ma méthode USEFETCH
import { useFetch } from "./useFetch";

export function useGetData(mock, id) {
  //Si j'appelle mes données mockées à partir de ma fausse API :
  //ATTENTION : Bien suivre les directives indiquées dans le fichier index.jsx
  // Mock (booléen) + commande json serveur sur le terminal
  const mocked_data = "http://localhost:1234/";

  //Si j'appelle l'API :
  const api_data = "http://localhost:3000/user/";

  //Afin de créer un chemin pour chaque catégorie :
  let path, pathSyntax, userPath, activityPath, averagePath, perfPath;

  /*J'applique ici ma condition afin de switcher
   entre données mockées et API*/

  // API :
  if (!mock) {
    path = api_data + id;
    pathSyntax = "/";
  } else {
    // DONNEES MOCKEES :
    path = mocked_data + id;
    pathSyntax = "-";
  }
  userPath = path;
  activityPath = path + pathSyntax + "activity";
  averagePath = path + pathSyntax + "average-sessions";
  perfPath = path + pathSyntax + "performance";

  //J'Ajoute mon USEFETCH à chacun des chemins :
  const {
    data: userData,
    loading: userLoading,
    error: userError,
  } = useFetch(userPath);

  const {
    data: activityData,
    loading: activityLoading,
    error: activityError,
  } = useFetch(activityPath);

  const {
    data: averageData,
    loading: averageLoading,
    error: averageError,
  } = useFetch(averagePath);

  const {
    data: perfData,
    loading: perfLoading,
    error: perfError,
  } = useFetch(perfPath);

  return {
    userData,
    userLoading,
    userError,
    activityData,
    activityLoading,
    activityError,
    averageData,
    averageLoading,
    averageError,
    perfData,
    perfLoading,
    perfError,
  };
}
