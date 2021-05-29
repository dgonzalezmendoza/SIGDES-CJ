/*
Template Name: Monster Admin
Author: Themedesigner
Email: niravjoshi87@gmail.com
File: js
*/
$(function () {
    "use strict";
    // ============================================================== 
    // Total revenue chart
    // ============================================================== 
    new Chartist.Line('.total-revenue', {
        labels: ['0', '4', '8', '12', '16', '20']
        , series: [
        [4, 2, 3.5, 1.5, 4, 3]
        , [2, 4, 2, 4, 2, 4]
      ]
    }, {
        high: 5
        , low: 1
        , fullWidth: true
        , plugins: [
        Chartist.plugins.tooltip()
      ]
        , // As this is axis specific we need to tell Chartist to use whole numbers only on the concerned axis
        axisY: {
            onlyInteger: true
            , offset: 20
            , labelInterpolationFnc: function (value) {
                return (value / 1) + 'k';
            }
        }
    });
    // ============================================================== 
    // doughnut chart option
    // ============================================================== 
   var chart = c3.generate({
            bindto: '#sales-donute',
            data: {
                columns: [
                    ['Item A', 9],
                    ['Item B', 3],
                    ['Item C', 2],
                    ['Item D', 2],
                ],

                type: 'donut',
                tooltip: {
                    show: true
                }
            },
            donut: {
                label: {
                    show: false
                },
                title: "",
                width: 15,
            },

            legend: {
                hide: true
            },
            color: {
                pattern: ['#edf1f5', '#009efb', '#55ce63', '#745af2']
            }
    });
    // Income of the year chart
    new Chartist.Bar('.income-year', {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      series: [
        [5, 4, 3, 7, 5, 10, 3],
        [3, 2, 9, 5, 4, 6, 4]
      ]
    }, {
      high: 12
            , low: 1
            , fullWidth: true
            , plugins: [
            Chartist.plugins.tooltip()
          ]
            ,     
      axisX: {
        // On the x-axis start means top and end means bottom
        position: 'bottom'
      },
        
      axisY: {
        // On the y-axis start means left and end means right
        
      }
    });
});    