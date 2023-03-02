$(function (e) {
    "use strict";
        $(".date-inputmask").inputmask("99/99/9999"),
        $(".cedula-inputmask").inputmask("9 9999 9999"),
        $(".phone-inputmask").inputmask("9999 9999"),
        $(".1_numero-inputmask").inputmask("9"),
        $(".2_numero-inputmask").inputmask("99"),
        $(".3_numero-inputmask").inputmask("999"),
        $(".Distrito-inputmask").inputmask("99999"),
        $(".Barrio-inputmask").inputmask("9999999"),

        $(".international-inputmask").inputmask("+9(999)999-9999"),
        $(".xphone-inputmask").inputmask("(999) 999-9999 / x999999"),
        $(".purchase-inputmask").inputmask("aaaa 9999-****"),
        $(".cc-inputmask").inputmask("9999 9999 9999 9999"),
        $(".ssn-inputmask").inputmask("999-99-9999"),
        $(".isbn-inputmask").inputmask("999-99-999-9999-9"),
        $(".currency-inputmask").inputmask("$9999"),
        $(".percentage-inputmask").inputmask("99%"),
        $(".optional-inputmask").inputmask("(99) 9999[9]-9999"),
        $("#num-letter").inputmask("999-AAA"),
        $("#date-time-once").inputmask(),
        $(".decimal-inputmask").inputmask({
            alias: "decimal"
            , radixPoint: "."
        }),

        $(".email-inputmask").inputmask({
            mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[*{2,6}][*{1,2}].*{1,}[.*{2,6}][.*{1,2}]"
            , greedy: !1
            , onBeforePaste: function (n, a) {
                return (e = e.toLowerCase()).replace("mailto:", "")
            }
            , definitions: {
                "*": {
                    validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~/-]"
                    , cardinality: 1
                    , casing: "lower"
                }
            }
        })         
        

});