(() => {

  function getMovieById(movieId: string) {
    console.log({ movieId });
  }


  function getMovieCastById(id: string) {
    console.log({ id });
  }


  function getActorBioById(ActorId: string) {
    console.log({ ActorId });
  }

  interface Movie {
    title: string;
    description: string;
    rating: number;
    cast: string[];
  }

  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  }

  function createNewActor(fullName: string, birthDate: Date): boolean {

    if (fullName === 'fernando') return false;

    console.log('Crear actor');
    return true;

  }

  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

    if (isDead) return 1500;

    if (isSeparated) return 2500;

    return (isRetired) ? 3000 : 4000




  }




})();




