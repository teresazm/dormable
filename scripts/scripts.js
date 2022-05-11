$(function () {
    //加上判断是否达到数量要求
    if ($(":checkbox").size() >= 2) {
      $(":checkbox").removeAttr("checked");
      $(":checkbox").attr("disabled", "disabled");
      $(":checkbox").removeAttr("disabled");
    }
  
    
    $(":checkbox").each(function () {
      $(this).click(function () {
        var num = 0;
        $(":checkbox").each(function () {
        
          if ($(this)[0].checked) {
            ++num;
          }
        })
        if (num >= 2) {
            //alert("最多选择 2项 的上限已满, 其他选项将会变为不可选.");
            $(":checkbox").each(function () {
              if (!$(this)[0].checked) {
                $(this).attr("disabled", "disabled");
              }
            });
          }else {
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

  $(function(){
    $('#submitbtn').click(function(){
      var modal = $("#detail_modal");
      var page = 0;
      
      $(":checkbox").each(function () {
        
        if ($(this)[0].checked) {
          page = page + Number($(this).val());
        }
      });
      if (page == 201) {
        window.location.href = "veggiecheese.html";
      }else if (page == 53) {
        window.location.href = "frenchtoast.html";
      }else if (page == 102) {
        window.location.href = "omeletteinamug.html";
      }else if (page == 13) {
        window.location.href = "bananabreadpudding.html";
      }else if (page == 131) {
        window.location.href = "instantnoodles.html";
      }else if (page == 1001) {
        window.location.href = "pizzaegg.html";
      }else if (page == 73) {
        window.location.href = "meatballsandwich.html";
      }else if (page == 1018) {
        window.location.href = "eggtoastpizza.html";
      }else if (page == 1101) {
        window.location.href = "pizzacroutons.html";
      }else if (page == 1003) {
        window.location.href = "pizzabreadpudding.html";
      }else if (page == 1070) {
        window.location.href = "pizzameatballs.html";
      }else if (page == 80) {
        window.location.href = "ramenmilk.html";
      }else if (page == 4) {
        window.location.href = "breadpizza.html";
      }else if (page == 33) {
        window.location.href = "ramenbread.html";
      }else if (page == 100) {
        window.location.href = "noodlemeatball.html";
      }else if (page == 101) {
        window.location.href = "scrambledegg.html";
      }else if (page == 131) {
        window.location.href = "veggieramen.html";
      }else if (page == 51) {
        window.location.href = "eggcustard.html";
      }else if (page == 40) {
       modal.modal();
      }else if (page == 120) {
        modal.modal();
       }else if (page == 151) {
        modal.modal();
       }else if (page == 71) {
        modal.modal();
       }else if (page == 110) {
        modal.modal();
       }else if (page == 111) {
        modal.modal();
       }else if (page == 31) {
        modal.modal();
       }else if (page == 131) {
        modal.modal();
       }else if (page == 13) {
        modal.modal();
       }else if (page == 170) {
        modal.modal();
       }else if (page == 1010) {
        modal.modal();
       }else if (page == 1030) {
        modal.modal();
       }else if (page == 1050) {
        modal.modal();
       }
    });
});

