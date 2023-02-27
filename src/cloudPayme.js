let btn = document.getElementById("payButton")
//let language = navigator.language //or fix
let language = "ru-RU"

function pay() {
  var widget = new cp.CloudPayments({
    language: language
  })
  widget.pay('auth', // или 'charge'
    { //options
      publicId: 'test_api_00000000000000000000002', //id из личного кабинета
      description: 'Оплата товаров в example.com', //назначение
      amount: 1000, //сумма
      currency: 'RUB', //валюта
      accountId: 'user@example.com', //идентификатор плательщика (необязательно)
      invoiceId: '1234567', //номер заказа  (необязательно)
      skin: "mini", //дизайн виджета (необязательно)
      autoClose: 3
    }, {
    onSuccess: function (options) { // success
      //действие при успешной оплате
      console.log(options);
    },
    onFail: function (reason, options) { // fail
      //действие при неуспешной оплате
    },
    onComplete: function (paymentResult, options) { //Вызывается как только виджет получает от api.cloudpayments ответ с результатом транзакции.
      //например вызов вашей аналитики Facebook Pixel
    }
  }
  )
}

//window.addEventListener('load', pay)
btn.addEventListener('click', pay)