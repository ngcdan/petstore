/**
 * Created by Nizis on 4/5/2021.
 */
$(document).ready(function () {
    this.sortPrice = function () {
        let sortSelected = $("#sortSelected").val();
        let productItems = $(".product__item .productPrice");//list product items
        productItems.sort(function (a, b) {
            let sortAsc = $(a).val() - $(b).val();
            let sortDesc = $(b).val() - $(a).val();
            let sortVal = sortSelected === "tangdan";
            let sortType = sortVal ? sortAsc : sortDesc;
            return sortType;
        });//sort
        let listProduct = $("#listProduct");//element selector of listProduct
        listProduct.empty();//clear all product
        for (let i = 0; i < productItems.length; i++) {
            let productItem = $(productItems)[i];
            let parent1 = $(productItem).parent();
            let parent2 = parent1.parent();
            let parent3 = parent2.parent();
            listProduct.append(parent3);//append product
        }
    }

});