$(function () {
    //加上判断是否达到数量要求
    if ($(":checkbox").size() >= 2) {
      $(":checkbox").removeAttr("checked");
      $(":checkbox").attr("disabled", "disabled");
      $(":checkbox").removeAttr("disabled");
    }
  
    var num = 0;
    $(":checkbox").each(function () {
      $(this).click(function () {
        if ($(this)[0].checked) {
          ++num;
          if (num == 2) {
            //alert("最多选择 2项 的上限已满, 其他选项将会变为不可选.");
            $(":checkbox").each(function () {
              if (!$(this)[0].checked) {
                $(this).attr("disabled", "disabled");
              }
            });
          }
        } else {
          --num;
          if (num <= 1) {
            $(":checkbox").each(function () {
              if (!$(this)[0].checked) {
                $(this).removeAttr("disabled");
              }
            });
          }
        }
      });
    });
  });


  const selections = [];
  ['egg', 'veggie'];

  localStorage.setItem('firstIngredient', selections[0]);
  localStorage.setItem('secondIngredient', selections[1] );
  window.location.href = './recipes.html';

  
  // get to new page
  const firstIngredient = localStorage.getItem('firstIngredient');
  