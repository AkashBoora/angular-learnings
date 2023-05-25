import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { map, catchError } from "rxjs/operators";
import { Subject, throwError } from "rxjs";

@Injectable({providedIn:'root'})
export class PostService {
  error = new Subject<string>();
  constructor(private http: HttpClient){}
  createAndStorePost(postData: Post){
    this.http
    .post<{ name: string }>(
      "https://ng-complete-guide-c42e1-default-rtdb.firebaseio.com/posts.json",
      postData
    )
    .subscribe((responseData) => {
      console.log(responseData);
    }, error => this.error.next(error.message));
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print','pretty');
    searchParams = searchParams.append('custom','key');
    return this.http
      .get<{[key: string]: Post}>(
        "https://ng-complete-guide-c42e1-default-rtdb.firebaseio.com/posts.json",
        {
          headers: new HttpHeaders({"Custom-Header": "Hello"}),
          params: searchParams
        }
      )
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key] });
            }
          }
          return postsArray;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }

  deletePosts() {
    return this.http.delete("https://ng-complete-guide-c42e1-default-rtdb.firebaseio.com/posts.json")
  }
}
