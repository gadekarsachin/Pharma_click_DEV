import {HttpClient,HttpHeaders,HttpErrorResponse, HttpParams} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { News } from 'src/app/shared/news';
import { Product } from 'src/app/shared/product';
import { environment } from 'src/environments/environment';
import { Events } from 'src/app/shared/events';
import { EventsRoutingModule } from '../../component/events/events-routing.module';
import { Category } from 'src/app/shared/category';
import { SubCategory } from 'src/app/shared/sub-category';
import { Blogs } from 'src/app/shared/blogs';
import { BlogsComponent } from '../../component/blogs/blogs.component';
import { BlogComments } from 'src/app/shared/blog-comments';
import { Notifications } from 'src/app/shared/notifications';
import { NotificationCat } from 'src/app/shared/notification-cat';
import { catchError } from 'rxjs/operators';
import { map } from 'jquery';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  companyshow: boolean = false;
  pNameMatch: boolean = false;

  companyshow1: boolean = false;
  // url: any = "http://pharmaclick.co.in/listing1/api/v1/";
  url: any = 'https://pharmaclick.co.in/listing/api/v1/';
  apiKey = '3c2f27c5df0f9e7558feb3b1afe6be9e';
  secKey = '5f2b5cf75705cb663a9dd1fcc9bb0f47';

  // sendToEmail(formData: any){
  //   return this.http.post(this.url+"", formData, this.httpOptions).pipe(catchError(this.handleError));
  // }

  private paramSource = new BehaviorSubject(null);
  sharedParam = this.paramSource.asObservable();

  private CatCompanylist = new BehaviorSubject(null);
  sharedCatCompanylist = this.CatCompanylist.asObservable();

  private paramSourceprod = new BehaviorSubject(null);
  sharedParamprod = this.paramSourceprod.asObservable();

  private parentCatActiveId = new BehaviorSubject(null);
  sharedCatActiveId = this.parentCatActiveId.asObservable();

  private singleSubCattActiveId = new BehaviorSubject(null);
  sharedsingleSubCatActiveId = this.singleSubCattActiveId.asObservable();

  private searchNewsOld = new BehaviorSubject(null);
  searchNewsNew = this.searchNewsOld.asObservable();

  private searchBlogOld = new BehaviorSubject(null);
  searchBlogNew = this.searchBlogOld.asObservable();

  private searchEventOld = new BehaviorSubject(null);
  searchEventNew = this.searchEventOld.asObservable();

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) { }
  sendBlogMail(data) {
    return this.http.post(this.url + 'BlogSendMail', data);
  }
  changeParam(param_subcat: any[]) {
    this.paramSource.next(param_subcat);
    // console.log(" catgeory all data = ",param_subcat );
  }

  SendCompnylist(param_company: any[]) {
    this.CatCompanylist.next(param_company);
    console.log(' Dipak ', param_company);
    this.companyshow = true;
  }

  changeParamProd(params_prod: any[]) {
    this.paramSourceprod.next(params_prod);
    // console.log(" product Id = ",params_prod );
  }

  changeparentCatId(params_id: any) {
    this.parentCatActiveId.next(params_id);
    // console.log(" main cat Id = ",params_id );
  }

  changeSingleSubCatId(subcatid: any) {
    this.singleSubCattActiveId.next(subcatid);
    console.log('singleSubCattActiveId == ', subcatid);
  }

  setSearchNews(data: any) {
    this.searchNewsOld.next(data);
    // console.log(data);
  }

  setSearchBlogs(data: any) {
    this.searchBlogOld.next(data);
  }

  setSearchEvent(data: any) {
    this.searchEventOld.next(data);
    // console.log(data);
  }

  login(userid: any, password: any) {
    return this.http.get(
      this.url + 'Authentication?username=' + userid + '&password=' + password
    );
  }

  registration(data: any) {
    return this.http.post(this.url + 'Registration', data);
  }

  registerUpdate(data: any) {
    return this.http.post(this.url + 'UpdateRegisteredUser', data);
  }

  googleRegistration(data: any) {
    console.log('this is service:', data);
    return this.http.post(this.url + 'LoginwithGoogle', data);
  }
  LoginwithGoogle(id: any) {
    return this.http.get(this.url + 'LoginwithGoogle?email=' + id);
  }
  // change password
  changePassword(data: any) {
    return this.http.post(this.url + 'ChangeUserPassword', data);
  }
  // forgot password
  forgotPassword(email: any) {
    // const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post(this.url + 'SendMailPasswordRecovery', email);
    //   .pipe(
    //   catchError(err =>{
    //     return this._errService.handleError(err);
    //   })
    //   )
    // }
  }
  getHelp(email: any) {
    // const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post(this.url + 'HelpSendMail', email);
  }

  viewAllCategories(): Observable<Category> {
    const baseUrl = this.url + 'Category';
    return this.http.get<Category>(baseUrl);
  }

  viewAllsubCategories(id): Observable<SubCategory> {
    const baseUrl = this.url + 'SubCategory?parentCategoryId=' + id;
    return this.http.get<SubCategory>(baseUrl);
  }

  viewsBannerImg() {
    return this.http.get(this.url + 'Banner');
  }

  viewAllProduct(id): Observable<Product> {
    const baseUrl = this.url + 'ProductsByCategoryId?categoryId=' + id;
    return this.http.get<Product>(baseUrl);
  }

  viewProductDetails(id): Observable<Product> {
    const url = this.url + 'CompaniesByProductId?productId=' + id;
    return this.http.get<Product>(url);
  }

  viewAllCompanyLogo() {
    return this.http.get(this.url + 'CompanyLogos');
  }

  viewAllCompanyList() {
    return this.http.get(this.url + 'Companies');
  }
  getAllProductList() {
    return this.http.get(this.url + 'Product');
  }
  viewAllCompanyListByCatId(id: any, pageIndex, pageSize) {
    return this.http.get(
      this.url +
      'CompaniesByProductCategoryId?categoryId=' +
      id +
      '&pageIndex=' +
      pageIndex +
      '&pageSize=' +
      pageSize
    );
  }

  viewAllAdvertiseImgs() {
    return this.http.get(this.url + 'Advertise');
  }

  viewAllCompanyListbyId(id) {
    return this.http.get(this.url + 'CompaniesByProductId?productId=' + id);
  }

  viewAllCompanyinfo(id: any) {
    return this.http.get(this.url + 'CompanyById?companyId=' + id);
  }

  ViewCompanyImg(data: any) {
    return this.http.get(this.url + 'CompanyImg?CompanyId=' + data);
  }

  productById(id: any) {
    return this.http.get(this.url + 'ProductById?ProductId=' + id);
  }

  ViewCompanycertificate(id: any, doc: any) {
    return this.http.get(
      this.url + 'Certificate?CustomerId=' + id + '&certificateType=' + doc
    );
  }

  companyRatings(objs): Observable<any> {
    return this.http.post(this.url + 'Ratings', objs);
  }
  upadteJobById(jobData: any) {
    // const updateUrl = `${this.url}${'JobByIdUpdate'}`
    // return this.http.post(updateUrl, jobData)
    return this.http.post(this.url + 'JobByIdUpdate', jobData);
  }


  // company / product search

  SearchProComp(
    Id: number,
    cName: string,
    pName: string,
    loc: string,
    pageIndex,
    pageSize,
    pNameMatch: any
  ) {
    var newStr = '';
    if (!cName) {
    } else {
      newStr += '&companyName=' + cName;
    }
    if (!pName) {
    } else {
      newStr += '&productName=' + pName;
    }

    if (!loc) {
    } else {
      newStr += '&location=' + loc;
    }
    // if (!pNameMatch ) {

    // }
    // else
    // {
    //   newStr += "&matchProductNameExactly=" + pNameMatch;
    // }

    newStr += '&pageIndex=' + pageIndex;
    newStr += '&pageSize=' + pageSize;
    newStr += '&matchProductNameExactly=' + pNameMatch;

    this.companyshow1 = true;
    // console.log("........sss......;",newStr)
    return this.http.get(
      this.url + 'CompaniesProductsSearch?categoryId=' + Id + newStr
    );
  }

  viewCompanyData(companyId): Observable<Product> {
    const baseUrl =
      'https://localhost:3000/productDetails?companyId=' + companyId;
    return this.http.get<Product>(baseUrl);
  }

  // viewAllsubCategories():Observable<SubCategory> {
  //   const baseUrl= "http://localhost:3000/subCategories";
  //   return this.http.get<SubCategory>(baseUrl);
  // }

  viewAllNewsList() {
    return this.http.get(this.url + 'NewsCategories');
  }
  viewAllSavedNews(userId, name) {
    return this.http.get(
      this.url +
      'GetSavedUserItemsDetails?userid=' +
      userId +
      '&itemname=' +
      name
    );
  }

  savedItems(userId, name) {
    return this.http.get(
      this.url + 'GetAllSavedUserItems?userid=' + userId + '&itemname=' + name
    );
  }

  followAuthor(data) {
    return this.http.post(this.url + 'BlogFollowerInsert', data);
  }

  getFollowerAuthor(id) {
    return this.http.get(this.url + 'BlgAuthListFollowedByUser?UserId=' + id);
  }
  getNewsDataClickNav(catName: any, pageIndex, pageSize) {
    return this.http.get(
      this.url +
      'News?categoryName=' +
      catName +
      '&pageIndex=' +
      pageIndex +
      '&pageSize=' +
      pageSize
    );
  }

  // this is for today and yesterday news
  viewAllNewsData(a, b) {
    return this.http.get(this.url + 'News');
  }

  SearchNews(title: any, desc: any, cat: any) {
    return this.http.get(
      this.url +
      'News?title=' +
      title +
      '&full=' +
      desc +
      ' &categoryName=' +
      cat
    );
  }
  CatWiseNewsDisplay(cat: any) {
    return this.http.get(this.url + ' &categoryName=' + cat);
  }

  viewNewsInfo(id: any, userId: any) {
    return this.http.get(
      this.url + 'NewsById?newsId=' + id + '&userId=' + userId
    );
  }

  viewNewsData(newsId): Observable<News> {
    const baseUrl = 'http://localhost:3000/News?newsId=' + newsId;
    return this.http.get<News>(baseUrl);
  }

  getNewsComment(data: any) {
    return this.http.post(this.url + 'NewsComment', data);
  }
  postNewsComment(data: any) {
    return this.http.post(this.url + 'NewsComment', data);
  }

  newsLike(data: any) {
    return this.http.post(this.url + 'NewsCommentLikes', data);
  }

  newsCommentOnReplay(data: any) {
    return this.http.post(this.url + 'NewsCommentReply', data);
  }

  // -------------Event listings----------------------

  viewAllEvents(): Observable<Events> {
    const url = this.url + 'EventsList';
    return this.http.get<Events>(url);
  }

  viewEventMonthList() {
    return this.http.get(this.url + 'EventMonthList');
  }

  viewAllEventsByMonths(month: any, year: any) {
    return this.http.get(
      this.url + 'EventsListInPeriod?month=' + month + '&year=' + year
    );
  }

  saveEvents(objs): Observable<any> {
    const publicKey = '3c2f27c5df0f9e7558feb3b1afe6be9e';
    const secretKey = '5f2b5cf75705cb663a9dd1fcc9bb0f47';

    const httpOptions = {
      headers: new HttpHeaders({
        authorization: `Bearer ${publicKey}:${secretKey}`,
      }),
    };

    return this.http.post(this.url + 'SaveUserItems', objs, httpOptions);
  }

  //   return this.http.post(this.url + "SaveUserItems" , objs, {headers});
  // }
  deleteSavedItem(id): Observable<any> {
    return this.http.delete(this.url + 'SaveUserItems/' + id);
  }

  viewEventDetails(Id) {
    return this.http.get(this.url + 'EventById?eventId=' + Id);
  }

  eventRatings(objs): Observable<any> {
    return this.http.post(this.url + 'Ratings', objs);
  }

  eventSearch(data: any) {
    return this.http.get(this.url + 'EventsSearch?keyText=' + data);
  }

  // blogs

  saveBlogs(objs): Observable<any> {
    const publicKey = '3c2f27c5df0f9e7558feb3b1afe6be9e';
    const secretKey = '5f2b5cf75705cb663a9dd1fcc9bb0f47';

    const httpOptions = {
      headers: new HttpHeaders({
        authorization: `Bearer ${publicKey}:${secretKey}`,
      }),
    };

    return this.http.post(this.url + 'SaveUserItems', objs, httpOptions);
  }

  blogsPost(data: any) {
    return this.http.post(this.url + 'BlogPost', data);
  }

  viewBlogs(pageIndex, pageSize) {
    return this.http.get(
      this.url + 'BlogList?pageIndex=' + pageIndex + '&pageSize=' + pageSize
    );
  }
  viewBlogsImage(pageIndex, pageSize) {
    return this.http.get(
      this.url + 'BlogImg?pageIndex=' + pageIndex + '&pageSize=' + pageSize
    );
  }
  viewBlogDetails(blogId: any, userid: any) {
    return this.http.get(
      this.url + 'BlogById?blogPostId=' + blogId + '&userId=' + userid
    );
  }
  viewBlogimg(blogId: any) {
    return this.http.get(
      this.url + 'BlogImg/' + blogId
    );
  }
  blogLike(data: any) {
    return this.http.post(this.url + 'BlogLike', data);
  }

  postBlogComment(data: any) {
    return this.http.post(this.url + 'BlogComment', data);
  }

  likeOnblogComment(data: any) {
    return this.http.post(this.url + 'LikeOnBlgComnt', data);
  }

  postReplayOnComment(data: any) {
    return this.http.post(this.url + 'BlogComntReply', data);
  }

  viewBlogComments() {
    return this.http.get('http://localhost:3000/blogComments');
  }

  SearchBlogs(data: any) {
    return this.http.get(this.url + 'BlogSearch?keyText=' + data);
  }

  getAuthorById(blogAthourId) {
    // const url = "http://localhost:3000/Blogs?blogId=" + blogAthourId;
    return this.http.get(
      this.url + 'BlogAuthorDetailById?authorId=' + blogAthourId
    );
  }
  // notification

  getNotifications() {
    return this.http.get(this.url + 'Notification');
  }
  viewNotification(): Observable<Notifications> {
    const url = 'http://localhost:3000/Notification';
    return this.http.get<Notifications>(url);
  }

  viewNotificationCat() {
    // const url="http://localhost:3000/NotificationCat"
    return this.http.get(this.url + 'NotificationCategory');
  }

  viewProfile(id) {
    return this.http.get(this.url + 'UserProfile?customerId=' + id);
  }

  updateProfileD(data) {
    return this.http.post(this.url + 'UpdateUserProfile', data);
  }

  jobPost(data) {

   

    
    const secretKey = 'secretapikey123';

    const httpOptions = {
      headers: new HttpHeaders({
        authorization: `${secretKey}`,
      }),
    };
    return this.http.post(this.url + 'JobsPost', data, httpOptions);
  }
  viewJobsImage(pageIndex, pageSize) {
    return this.http.get(
      this.url + 'jobImg?pageIndex=' + pageIndex + '&pageSize=' + pageSize
    );
  }
  viewJobimg(JobId: any) {
    return this.http.get(
      this.url + 'JobImg/' + JobId
    );
  }
  getJobsSearch(val) {
    // return this.http.get(this.url + "JobSearch?searchString=" + val + "&userid=" + JSON.parse(localStorage.getItem("token")).CompanyId); //For user data
    return this.http.get(
      this.url + 'JobSearch?searchString=' + val + '&userid=1'
    ); //for all data
  }

  filterJobs(id: any, loc?: any, posted?: any, dept?: any, companyName?: any, jobType?: any, salary?: any, exp?: any): Observable<any> {
    // const baseUrl = `${this.url}+'JobFilter'`
    let params = new HttpParams().set('userid', id)

    if (loc) {
      params = params.set('location', loc)
    }
    if (posted) {
      params = params.set('postedBy', posted)
    }
    if (dept) {
      params = params.set('department', dept)
    }
    if (companyName) {
      params = params.set('companyName', companyName)
    }
    if (jobType) {
      params = params.set('jobType', jobType)
    }
    if (salary) {
      params = params.set('salary', salary)
    }
    if (exp) {
      params = params.set('experience', exp)
    }
    return this.http.get(this.url + 'JobFilter', { params })
  }
  getJobsList() {
    return this.http.get(this.url + 'JobsPost?userid=1');
  }

  getJobDetailsById(id) {
    return this.http.get(this.url + 'JobsById/' + id);
  }

  applyJobPostSendEmail(data) {
    return this.http.post(this.url + 'JobPostSendMail/', data);
  }
  deleteJobById(id) {
    return this.http.delete(this.url + 'DeleteJob/' + id)
  }
  // updateProfilePic(id: number, data: any){
  //   const headers = new HttpHeaders({ "Content-Type": "application/json" });
  //   return this.http.post(this.url + "UpdateUserProfilePicture?UserId="+id +"&imagestr="+data,{ headers: headers });
  // }

  updateProfilePic(obj) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.url + 'UpdateUserProfilePicture', obj, {
      headers: headers,
    });
  }
  viewProfilePic(id) {
    return this.http.get(this.url + 'UpdateUserProfilePicture?UserId=' + id);
  }

  viewuserEvetn(id: any) {
    return this.http.get('http://localhost:3000/userEvetn?userId=' + id);
  }

  viewuserreview(id: any) {
    return this.http.get(' http://localhost:3000/userReview?userId=' + id);
  }

  getSavedItem(id: any, savedItemType: any) {
    return this.http.get(
      this.url +
      'GetSavedUserItemsDetails?userid=' +
      id +
      '&itemname=' +
      savedItemType
    );
  }

  getRatedCompanies(id: any) {
    return this.http.get(this.url + 'GetRatedCompanies?Userid=' + id);
  }
  // [Dipak Ahirav][03-March-2023] - To remove user account
  deleteMyAccount(id: any) {
    return this.http.delete(this.url + 'UserDelete/' + id);
  }
  // [Dipak Ahirav][03-March-2023] - To remove user account

  otpVerfication(custid, otp) {
    return this.http.get(
      this.url + 'OTPVerification?custId=' + custid + '&otp=' + otp
    );
  }

  public sendMessage(message: any) {
    // this.socket.emit('new-message', message);
    return this.http.post(this.url + "ChatDetail", message);


  }

  public getMessages(senderId: any, receiverId: any) {
    return this.http.get(this.url + "ChatDetail?senderId=" + senderId + "&receiverId=" + receiverId);

    // return Observable.create((observer: any) => {
    //     this.socket.on('new-message', (message) => {
    //         observer.next(message);
    //     });
    //     return Observable;
    //     console.log("message in service", Observable);
    // });
  }

  public getRepMessages(senderId: any, receiverId: any) {
    return this.http.get(this.url + "ChatDetail?senderId=" + senderId + "&receiverId=" + receiverId);
  }

  deleteChatServ(senderId: any, receiverId: any, timestamp: any): Observable<any> {
    return this.http.delete(this.url + "ChatDetail?senderId=" + senderId + "&receiverId=" + receiverId + "&timestamp=" + timestamp);

  }

  getChatList(senderId: any) {
    return this.http.get(this.url + "ChatDetailList?senderId=" + senderId);

  }

  /* Method to call post api */
  //  post(endPoint: any, data: any, cb:any): any {
  //    const self = this;
  //    this.http.post(url: `${this.baseUrl}/${endPoint}`, data, options: {observe:'response'}).subscribe(next (res:any) => {
  //         if(res.body.success ===false){
  //           this.
  //         }
  //    }))
  //  }
}
