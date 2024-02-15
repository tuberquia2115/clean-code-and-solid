import { HttpClient } from './03-open-close-c';
import { PostService } from './05-dependency-b';
import { JsonDataBaseService, LocalDataBaseService, WepApiPostService } from './05-dependency-c';


// Main
(async () => {
  const httpClient = new HttpClient()
  //const provider = new JsonDataBaseService();
  // const provider = new LocalDataBaseService();
  const provider = new WepApiPostService(httpClient)

  const postService = new PostService(provider);

  const posts = await postService.getPosts();

  console.log({ posts })


})();