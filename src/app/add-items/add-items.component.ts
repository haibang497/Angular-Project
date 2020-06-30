import { Component, OnInit } from '@angular/core';
import { ItemService } from '../service/item.service';
import { Item } from '../model/item';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  item: Item={
    Name:'',
    Price: '',
    Sale: '',
    Status:''
  }
  constructor(private itemService: ItemService) {
   }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.item.Name!=''&&this.item.Price!=''&&this.item.Sale!=''&&this.item.Status!=''){
      this.itemService.addItem(this.item);
      this.item.Name='';
      this.item.Price='';
      this.item.Sale='';
      this.item.Status='';
    }
  }

}
