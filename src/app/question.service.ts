import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/environments/Question';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  url = "yy";
  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.url);
  }
  getQuestionsById(Id: string): Observable<Question[]> {
    let params = new HttpParams();
    params.set("Id", Id);
    return this.http.get<Question[]>(this.url+"?Id="+Id);
  }

  updateQuestion(question:Question) : Observable<Question> {
    return this.http.put<Question>(this.url,question);
  }

}
