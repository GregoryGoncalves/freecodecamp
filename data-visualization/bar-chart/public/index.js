/* 
    Configuration variables
*/
const container_div = document.querySelector(".container");
const container_styles = window.getComputedStyle(container_div);

const container_dimensions = {
    width: container_styles.getPropertyValue("width").slice(0,-2),
    height: container_styles.getPropertyValue("height").slice(0,-2)
}

const svg_dimensions = {
    width: container_dimensions.width-100,
    height: container_dimensions.height-100,
    padding: 40
}

let fallback_data = {};

d3.json('./data_fallback.json', (error, data) => {
    if(error){
        console.log(error);
    }
    fallback_data = data;
});

d3.json('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json', (error, data) => {
    if(error){
        console.log(error+"\n\nAn error ocurred with the remote API, using local fallback data from march 2017");
        data = fallback_data;
    }
        
    /* Data formatting */
    let tooltip = {
        quarter: []
    }
    let years = [];

    data.data.map((value) => {
            const year = value[0].substring(0, 4);
            let output = year;
            const quarter = value[0].substring(5,7);

            switch(quarter){
                case '01':
                    output += ' Q1';
                    break;
                case '04':
                    output += ' Q2';
                    break;
                case '07':
                    output += ' Q3';
                    break;
                case '10':
                    output += ' Q4';
                    break;
            }
            tooltip.quarter.push(output);
            years.push(year);
    });

    let xScale = d3.scaleLinear()
                    .domain([d3.min(years), d3.max(years)])
                    .range([0, svg_dimensions.width]);
    
    let xAxis = d3.axisBottom().scale(xScale).tickFormat(d3.format('d'));

    /* Rendering on page */
    let container = d3.select('.graph')
    .append('svg')
        .attr('height', svg_dimensions.height)
        .attr('width', svg_dimensions.width);
    
    container.append('text')
                .attr('transform', 'rotate(-90)')
                .attr('x', -250)
                .attr('y', 80)
                .text('Gross domestic product');
    
    container.append('g')
            .call(xAxis)
            .attr('transform', 'translate('+ svg_dimensions.padding +','+ svg_dimensions.height - svg_dimensions.padding +')');
    
});
        