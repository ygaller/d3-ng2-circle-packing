import {Component, OnInit, ElementRef, OnDestroy, Input} from "@angular/core";
import {D3Service, D3, Selection} from "d3-ng2-service";
import {HierarchyPointNode, HierarchyNode} from "d3-hierarchy";
import {Observable} from "rxjs";

@Component({
  selector: 'd3-circle-packing-renderer',
  templateUrl: './d3-circle-packing-renderer.component.html',
  styleUrls: ['./d3-circle-packing-renderer.component.css'],
})
export class D3CirclePackingRendererComponent implements OnInit, OnDestroy {

  private d3: D3;
  private parentNativeElement: any;
  private d3Svg: Selection<SVGSVGElement, any, null, undefined>;

  @Input() root: Observable<HierarchyNode<any>>;

  constructor(element: ElementRef, d3Service: D3Service) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
  }


  ngOnDestroy(): void {
    if (this.d3Svg.empty && !this.d3Svg.empty()) {
      this.d3Svg.selectAll('*').remove();
    }
  }

  ngOnInit() {
    const d3 = this.d3;

    function hovered(hover) {
      return function (d) {
        d3.selectAll(d.ancestors().map(d => d.node)).classed("node--hover", hover);
      };
    }

    if (this.parentNativeElement == null) {
      return;
    }

    const d3ParentElement: Selection<HTMLElement, any, null, undefined> = d3.select(this.parentNativeElement);
    const d3Svg: Selection<SVGSVGElement, any, null, undefined> = this.d3Svg = d3ParentElement.select<SVGSVGElement>('svg');
    const svgWidth: number = +d3Svg.attr('width');
    const svgHeight = +d3Svg.attr('height');

    const format = d3.format(",d");

    const color: (number) => string = d3.scaleSequential(d3.interpolateViridis).domain([-4, 4]);

    const pack = d3.pack()
      .size([svgWidth - 2, svgHeight - 2])
      .padding(3);

    const processData = function (root: HierarchyNode<any>) {
      pack(root);

      const node = d3Svg.select<SVGGElement>("g")
        .selectAll("g")
        .data(root.descendants())
        .enter().append("g")
        .attr("transform", (d: HierarchyPointNode<any>) => "translate(" + d.x + "," + d.y + ")")
        .attr("class", d => "node" + (!d.children ? " node--leaf" : d.depth ? "" : " node--root"))
        .each(function (d) {
          (<any>d).node = this;
        })
        .on("mouseover", hovered(true))
        .on("mouseout", hovered(false));

      node.append<SVGCircleElement>("circle")
        .attr("id", d => {
          return "node-" + d.data.name;
        })
        .attr("r", d => (<any>d).r)
        .style("fill", d => color(d.depth));

      const leaf = node.filter(d => !d.children);

      leaf.append("clipPath")
        .attr("id", d => "clip-" + d.data.name )
        .append("use")
        .attr("xlink:href", d => "#node-" + d.data.name + "");

      leaf.append("text")
        .attr("clip-path", d => "url(#clip-" + d.data.name + ")")
        .selectAll("tspan")
        .data((d: HierarchyNode<any>) => {
          return d.data.name.substring(d.data.name.lastIndexOf(".") + 1).split(/(?=[A-Z][^A-Z])/g);
        })
        .enter().append("tspan")
        .attr("x", 0)
        .attr("y", (d, i, nodes) => 13 + (i - nodes.length / 2 - 0.5) * 10)
        .text(d => '' + d);

      node.append("title")
        .text(d => d.data.name + "\n" + format(d.value));
    };

    this.root.subscribe(root => processData(root));
  }
}
