
window.onload=CXENSE_content_rec;

function CXENSE_content_rec(){

	var current_site_url = window.location.href;
	var request_url;
	var persisted_url_content_fetch = 'https://api.cxense.com/public/widget/data';
	var callback_content_rec_fetch = '&callback=onGotContentRec&media=json';
	var content_recommend_query =  {"widgetId":"d982dacf1e822be0c5ccb3f9799de9b637edc2ab"};
	var request_url = persisted_url_content_fetch + '?json=' + encodeURIComponent(cX.JSON.stringify(content_recommend_query)) + callback_content_rec_fetch;
	console.log(request_url);

	cX.library.loadScript(request_url);
	console.log("request sent");
}



function onGotContentRec(data){
	console.log("call back");
	console.log(data);
	var items_array = data.response.items;
	if(items_array.length==20){
		var kannrenn_ul_dom = $('<ul>');
		kannrenn_ul_dom.addClass( "tilelist col5 pT10");
		var kannrenn_title_dom = $('<h2>');
		kannrenn_title_dom.text("この記事を読んだ人が読んだ別の記事");
		kannrenn_title_dom.addClass( "bigger mT10 mL10 remark");
		for(var i=0;i<5;i++){
			try{
				var kannrenn_li_dom = $('<li>');
				var a_dom = $('<a>');
				a_dom.attr("href", items_array[i].click_url);
				a_dom.attr("class", "recipename");
				var img_dom = $('<img>');
				img_dom.attr("src", items_array[i].dominantimage);
				img_dom.attr("width", 116);
				img_dom.attr("class", "recipeimg");
				//console.log("dominant image " + i + " is " + items_array[i].dominantimage);
				//console.log("thumb nail url " + i + " is " + items_array[i].dominantthumbnail);
				a_dom.append(img_dom);

				var title_array = items_array[i].title.split("【");

				a_dom.append(title_array[0]);
				kannrenn_li_dom.append(a_dom);
				kannrenn_ul_dom.append(kannrenn_li_dom);
			}
			catch(err){
				console.log("something is missing");
			}
		}
		$("#cxense_kannrenn").append(kannrenn_title_dom);
		$("#cxense_kannrenn").append(kannrenn_ul_dom);


		var latest_h2_title_dom = $('<h2>');
		latest_h2_title_dom.text("あなたへのおすすめ料理");
		var latest_ul_dom = $('<ul>');
		latest_ul_dom.addClass( "thmblist");
		var simple_scroll_div_dom = $('<div>');
		simple_scroll_div_dom.addClass( "simply-scroll simply-scroll-container");
		var simple_scroll_clip_div_dom = $('<div>');
		simple_scroll_clip_div_dom.addClass( "simply-scroll-clip");
		var slider_div_dom = $('<div>');
		slider_div_dom.attr("id", "slider");
		slider_div_dom.addClass( "simply-scroll-list");
		slider_div_dom.attr("style", "height: 1548px;");

		for(var i=0;i<15;i++){
			try{
				var latest_li_dom = $('<li>');
				var latest_a_dom = $('<a>');
				latest_a_dom.attr("href", items_array[i].click_url);
				latest_a_dom.attr("class", "recipename");
				var latest_span_dom = $('<span>');
				latest_span_dom.addClass( "thmbwrapright");
				var latest_img_dom = $('<img>');
				latest_img_dom.attr("src", items_array[i].dominantimage);
				latest_img_dom.attr("width", 115);

				latest_span_dom.append(latest_img_dom);
				latest_a_dom.append(latest_span_dom)
				latest_a_dom.append("XXXXXXX")
				latest_li_dom.append(latest_a_dom);
				slider_div_dom.append(latest_li_dom);
			}
			catch(err){
				console.log("something is missing");
			}
		}
		simple_scroll_clip_div_dom.append(slider_div_dom);
		simple_scroll_div_dom.append(simple_scroll_clip_div_dom);
		latest_ul_dom.append(simple_scroll_div_dom);
		$("#cxense_user_like").append(latest_h2_title_dom);
		$("#cxense_user_like").append(latest_ul_dom);


		for(i=15;i<20;i++){
		}
		//$("#cxense_trend").append(trend_ul_dom);
	slide_start()
	}

}

 


function slide_start() {
  $("#slider").simplyScroll({
  	orientation: 'vertical',
  	auto: true,
  	manualMode: 'loop',
  	frameRate: 20,
  	speed: 1
  });
}