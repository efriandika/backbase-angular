import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

/**
 * Skeleton Element can be used to make a component skeleton
 * @author efriandika
 */
@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements OnChanges {

  /**
   * Total rows
   */
  @Input() count: number = 1;

  /**
   * Width of the skeleton element
   */
  @Input() width?: number | string;

  /**
   * Height of the skeleton element
   */
  @Input() height?: number | string;

  /**
   * Set element as circle
   * Constraint: width and height must be set width the same value
   */
  @Input() circle: boolean = false;

  /**
   * Custom additional css class
   */
  @Input() className: string = '';

  /**
   * Custom style
   */
  @Input() style: string = '';

  public loops: number[] = new Array(1);

  constructor() {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.count != null) {
      this.loops = new Array(this.count);
    }
  }
}
