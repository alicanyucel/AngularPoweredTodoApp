import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  template: `
  <div class="container" style="margin-top: 30px;">
  <h1>Ali Can Yücel TodoApp</h1>
  <hr>
  <div *ngIf="!isUpdateFormActive">
  <div class="form-group">
    <label for="work">Yapılacak İşler</label>
    <input type="text" class="form-control" [ngClass]="changeInputClass" [(ngModel)]="work" class="form-control" id="work" name="work">
    <div class="invalid-feedback">
      En az 3 karakter Girmelisiniz.
    </div>
</div> 
<div class="form-group  mt-2"> 
  <button [disabled]="work.length <3" (click)="save()" class="btn btn-outline-primary w-100">Kaydet</button>
</div>
  </div>
<hr>
<div *ngIf="isUpdateFormActive">
  <div class="form-group">
    <label for="work">Yapılacak İşler</label>
    <input type="text" [(ngModel)]="updateWork" class="form-control" id="work" name="work">
</div> 
<div class="form-group  mt-2"> 
  <button (click)="update()" class="btn btn-outline-primary w-100">Güncelle</button>
  <button (click)="cancel()" class="btn btn-outline-danger w-100 mt-2">Vazgeç</button>
</div>
  </div>
<ul>
  <li class="mt-1" *ngFor="let w of works  let i=index">{{w}}
    <div *ngIf="!isUpdateFormActive">
<button (click)="get(w,i)" class="btn btn-outline-warning btn-sm mx-1" (click)="update()">Güncelle</button>
<button class="btn btn-outline-danger btn-sm" (click)="remove(i)">Sil</button>
    </div>
</li>
`
})
export class AppComponent {
  title = 'Ali Can Yücel TodoList2';
  index: number = 0;
  isUpdateFormActive: Boolean = false;
  updateWork: string;
  work: string = "";
  works: string[] = ["Deneme 1", "Deneme 2", "Deneme 3"];
  remove(index: number) {
    let result: boolean = confirm("kaydi silmek istiyormusunuz");
    if (result)
      this.works.splice(index, 1);
  }
  get(work: string, index: number) {
    this.updateWork = work;
    this.index = index;
    this.isUpdateFormActive = true;
  }
  cancel() {
    this.isUpdateFormActive = false
  }
  update() {
    this.works[this.index] = this.updateWork;
    this.cancel();
  }
changeInputClass(){
if(this.work.length<3)
  return "is-invalid"
  return "is-valid"
}
  save() {
    this.works.push(this.work);
    this.work = "";
  }
}