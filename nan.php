<!DOCTYPE html>
<html lang="en">

<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src="https://cdn.datatables.net/1.13.1/js/jquery.dataTables.min.js"></script>
    <link href="https://cdn.datatables.net/1.13.1/css/jquery.dataTables.min.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    table,
    th,
    td {
        border: 1px solid;
    }
</style>

<body>
    <form name="frm_search" id="frm_search">
        <label for="in_pack">Package:</label>
        <input type="text" id="in_pack" name="in_pack"><br><br>
        <input id="btn-search" type="button" value="Submit"><br><br>
    </form>
    <table id="table-calculate">
        <thead>
            <tr>
                <th>เดือน</th>
                <th>แพ็ค</th>
                <th>Roll up</th>
                <th>Baht/Day</th>
                <th>30% Point/DAY</th>
                <th>Sum DAY</th>
                <th>Baht/month</th>
                <th>30% Point/month</th>
                <th>Sum month</th>
                <th>Bath/month (ถอนต่อเดือน ค่าธรรมเนียมอ 20 บาท)</th>
                <th>30% Point/month (ถอนต่อเดือน 5%)</th>
                <th>30% Point/month (ณ ที่จ่าย 5%)</th>
                <th>Sum month</th>
                <th>คงเหลือ</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
</body>

</html>

<script>
    const months = [
        ["Jan", 31],
        ["Feb", 28],
        ["Mar", 31],
        ["Apr", 30],
        ["May", 31],
        ["Jun", 30],
        ["Jul", 31],
        ["Aug", 31],
        ["Sep", 30],
        ["Oct", 31],
        ["Nov", 30],
        ["Dec", 31]
    ];
    $(document).ready(function() {

    });

    function calcPercent(num, percentage) {
        const result = num * (percentage / 100);
        return parseFloat(result.toFixed(2));
    }
    $(document).on("change", ".in_rollover", function() {
        var pv;
        var ro;

        var count = parseInt(this.id.substring(3));
        if (count != 0) {
            ro = this.value;
            var res_pv = Number($('#pv_' + (count - 1)).html().replace(/[^0-9.-]+/g, "")) + parseFloat(ro);
            var bd = (res_pv / 365);
            var thtypd = (calcPercent(res_pv, 30) / 365);
            var sumd = bd + thtypd;
            var bm = bd * months[count][1];
            var thtypm = thtypd * months[count][1];
            var summ = sumd * months[count][1];
            var bmwd = bm - 20;
            var thtypmwd = thtypm - calcPercent(thtypm, 5);
            var thtypmat = thtypmwd - calcPercent(thtypmwd, 5);
            var summ2 = bmwd + thtypmat;
            var total = summ2 - ro;

            $('#pv_' + count).text((res_pv).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }));

            $('#bd_' + count).text((bd).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }));

            $('#thtypd_' + count).text((thtypd).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }));

            $('#sumd_' + count).text((sumd).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }));

            $('#bm_' + count).text((bm).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }));

            $('#thtypm_' + count).text((thtypm).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }));

            $('#summ_' + count).text((summ).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }));

            $('#bmwd_' + count).text((bmwd).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }));

            $('#thtypmwd_' + count).text((thtypmwd).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }));

            $('#thtypmat_' + count).text((thtypmat).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }));

            $('#summ2_' + count).text((summ2).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }));

            $('#total_' + count).text((total).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }));

            //จำนวนหลัง
            for (var i = count+1; i < 12; i++) {
                
                ro_last = Number($('#ro_' + (count+1)).val().replace(/[^0-9.-]+/g, ""));
                console.log(ro_last);
                var res_pv_last = Number($('#pv_' + (count)).html().replace(/[^0-9.-]+/g, "")) + parseFloat(ro_last);
                $('#pv_' + i).text((res_pv_last).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }));

                $('#bd_' + i).text((bd).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }));

                $('#thtypd_' + i).text((thtypd).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }));

                $('#sumd_' + i).text((sumd).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }));

                $('#bm_' + i).text((bm).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }));

                $('#thtypm_' + i).text((thtypm).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }));

                $('#summ_' + i).text((summ).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }));

                $('#bmwd_' + i).text((bmwd).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }));

                $('#thtypmwd_' + i).text((thtypmwd).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }));

                $('#thtypmat_' + i).text((thtypmat).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }));

                $('#summ2_' + i).text((summ2).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }));

                $('#total_' + i).text((total).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }));

            }

        }

    });

    $(document).on("click", "#btn-search", function() {
        $('#table-calculate').find('tbody').empty();
        var pack_val = [];
        var rollover = 0;

        for (var i = 0; i < 12; i++) {
            if (i == 0) {
                pack_val[i] = parseFloat($("#in_pack").val());
                rollover = 0;
            } else {
                pack_val[i] = pack_val[i - 1] + rollover;
            }
            var bd = (pack_val[i] / 365);
            var thtypd = (calcPercent(pack_val[i], 30) / 365);
            var sumd = bd + thtypd;
            var bm = bd * months[i][1];
            var thtypm = thtypd * months[i][1];
            var summ = sumd * months[i][1];
            var bmwd = bm - 20;
            var thtypmwd = thtypm - calcPercent(thtypm, 5);
            var thtypmat = thtypmwd - calcPercent(thtypmwd, 5);
            var summ2 = bmwd + thtypmat;
            var total = summ2 - rollover;

            markup = "<tr>" +
                "<td class='tdmonths'>" + months[i][0] + "</td>" +
                "<td id='pv_" + i + "' class='pv''>" + pack_val[i].toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }) + "</td>" +
                "<td><input  id='ro_" + i + "' type='text' class='in_rollover' value=" + rollover.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }) + " name='in_rollover'/></td>" +
                "<td id='bd_" + i + "'>" + bd.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }) + "</td>" +
                "<td id='thtypd_" + i + "'>" + thtypd.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }) + "</td>" +
                "<td id='sumd_" + i + "' >" + sumd.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }) + "</td>" +
                "<td id='bm_" + i + "'>" + bm.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }) + "</td>" +
                "<td id='thtypm_" + i + "'>" + thtypm.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }) + "</td>" +
                "<td id='summ_" + i + "'>" + summ.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }) + "</td>" +
                "<td id='bmwd_" + i + "'>" + bmwd.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }) + "</td>" +
                "<td id='thtypmwd_" + i + "'>" + thtypmwd.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }) + "</td>" +
                "<td id='thtypmat_" + i + "'>" + thtypmat.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }) + "</td>" +
                "<td id='summ2_" + i + "'>" + summ2.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }) + "</td>" +
                "<td id='total_" + i + "'>" + total.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }) + "</td>" +
                "</tr>";
            tableBody = $("#table-calculate tbody");
            tableBody.append(markup);

            $("#ro_0").val("");
            $("#ro_0").prop("disabled", true);

        }



    });
    // $(function() {
    //     $('.pnm, .price, .subtot, .grdtot').prop('readonly', true);
    //     var $tblrows = $("#tblProducts tbody tr");

    //     $tblrows.each(function(index) {
    //         var $tblrow = $(this);

    //         $tblrow.find('.qty').on('change', function() {

    //             var qty = $tblrow.find("[name=qty]").val();
    //             var price = $tblrow.find("[name=price]").val();
    //             var subTotal = parseInt(qty, 10) * parseFloat(price);

    //             if (!isNaN(subTotal)) {

    //                 $tblrow.find('.subtot').val(subTotal.toFixed(2));
    //                 var grandTotal = 0;

    //                 $(".subtot").each(function() {
    //                     var stval = parseFloat($(this).val());
    //                     grandTotal += isNaN(stval) ? 0 : stval;
    //                 });

    //                 $('.grdtot').val(grandTotal.toFixed(2));
    //             }
    //         });
    //     });
    // });
</script>