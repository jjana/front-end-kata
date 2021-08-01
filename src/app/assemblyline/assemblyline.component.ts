import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "assemblyline",
  templateUrl: "./assemblyline.component.html",
  styleUrls: ["./assemblyline.component.scss"]
})
export class AssemblyLineComponent implements OnInit {
  @Input() stages: string[];
  public stageMultiArray = [];
  public inputAddItem: string = '';

  ngOnInit() {
    this.initStageArray();
  }

  initStageArray() : void{
    this.stages.forEach((stage, index) => {
      this.stageMultiArray[index] = [];
    });
  }

  addItem(event) {
    if (!this.inputAddItem)
      return false;
    this.stageMultiArray[0].unshift(this.inputAddItem);
    this.inputAddItem = '';
  }

  changeStage(index, stage) : void{
    const text = this.stageMultiArray[stage].splice(index, 1);
    if (stage + 1 < this.stages.length) {
      this.stageMultiArray[stage + 1].unshift(text);
    }
  }


  onRightClick(index, stage) : void{
    event.preventDefault();
    const text = this.stageMultiArray[stage].splice(index, 1);
    if (stage - 1 >= 0) {
      this.stageMultiArray[stage - 1].push(text[0]);
    }
  }


}
