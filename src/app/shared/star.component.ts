import {Component, EventEmitter, Input, OnChanges, Output} from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<number> = new EventEmitter<number>();


    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }

    // onClick(): void {
    //     this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    // }
    onUpvote(): void {
        this.ratingClicked.emit(1);
    }

    onDownvote(): void {
        this.ratingClicked.emit(-1);
    }
}