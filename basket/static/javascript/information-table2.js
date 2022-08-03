//fetch('url')
//.then()은 서버와 통신 후 response 객체 return
function getTable(tab) {
  const category_code_map = {
<<<<<<< HEAD
    tab01: "과일",
    tab02: "채소",
    tab03: "쌀/잡곡",
    tab04: "수산물",
  };

  const paramsString =
    "name="+category_code_map[tab];


  const searchParams = new URLSearchParams(paramsString);


  $.ajax("http://127.0.0.1:8000/api/get/", {
=======
    tab01: "400",
    tab02: "200",
    tab03: "100",
    tab04: "600",
  };

  const paramsString =
    "action=dailyPriceByCategoryList" +
    "&p_product_cls_code=01" +
    "&p_country_code=1101" +
    "&p_convert_kg_yn=N" +
    "&p_cert_key=31a006ec-20bb-4816-b495-f21ad9140c28" +
    "&p_cert_id=222" +
    "&p_returntype=json";

  let today = new Date();
  let todayAgo3 = new Date();
  todayAgo3.setDate(todayAgo3.getDate() - 3);

  let todayString = today.toISOString().split("T")[0];
  let todayAgo3String = todayAgo3.toISOString().split("T")[0];

  const searchParams = new URLSearchParams(paramsString);
  searchParams.set("p_regday", todayAgo3String);
  searchParams.set("p_item_category_code", category_code_map[tab]);

  $.ajax("http://www.kamis.or.kr/service/price/xml.do", {
>>>>>>> 1f8d6f6b63e14397d5406eb776f8cb8b78048486
    type: "GET", // HTTP method type(GET, POST) 형식이다.
    data: searchParams.toString(), // Json 형식의 데이터이다.
    dataType: "json",
  }).done(function (json) {
<<<<<<< HEAD
    let items = json;
=======
    let items = json.data.item;
>>>>>>> 1f8d6f6b63e14397d5406eb776f8cb8b78048486

    let table_body = items
      .map(
        (item) => `<tr>
                    <td>${item.item_name}</td>
                    <td>${item.kind_name}</td>
                    <td>${item.unit}</td>
<<<<<<< HEAD
                    <td>${item.today}</td>
                    <td>${item.past_month}</td>
=======
                    <td>${item.dpr1}</td>
                    <td>${item.dpr5}</td>
>>>>>>> 1f8d6f6b63e14397d5406eb776f8cb8b78048486
                  </tr>`
      )
      .reduce((prev, curr) => prev + curr);

    $("#table tbody").html(table_body);
  });
}

