/**
 * Created by Jackyrul on 17.06.2016.
 */
/**
 * Created by Jackyrul on 31.05.2016.
 */
(function () {
    'use strict';

    var app = angular.module('asteri')

    app.directive('name', function() {
        return {
            link: function($scope, element, attrs) {
                // Trigger when number of children changes,
                // including by directives like ng-repeat

                var watch = $scope.$watch(function() {
                    return element.children().length;
                }, function() {
                    // Wait for templates to render
                    $scope.$evalAsync(function() {
                        //createmap();
                        carousel();
                        //handleFullscreen();
                        //handleValignMiddle();
                        //handleEqualHeightColumns();
                        //promo();
                        //scroll();
                        //var children = element.children();
                        //console.log(children);
                    });
                });
            },
        };
    });
    var carousel = function(){
        //#main-slider
        $(function(){
            $('#main-slider.carousel').carousel({
                interval: 1000
            });
        });


        //// accordian
        //$('.accordion-toggle').on('click', function(){
        //    $(this).closest('.panel-group').children().each(function(){
        //        $(this).find('>.panel-heading').removeClass('active');
        //    });
        //
        //    $(this).closest('.panel-heading').toggleClass('active');
        //});

        //Initiat WOW JS
        new WOW().init();

        // portfolio filter
        //$(window).load(function(){'use strict';
        //    var $portfolio_selectors = $('.portfolio-filter >li>a');
        //    var $portfolio = $('.portfolio-items');
        //    $portfolio.isotope({
        //        itemSelector : '.portfolio-item',
        //        layoutMode : 'fitRows'
        //    });
        //
        //    $portfolio_selectors.on('click', function(){
        //        $portfolio_selectors.removeClass('active');
        //        $(this).addClass('active');
        //        var selector = $(this).attr('data-filter');
        //        $portfolio.isotope({ filter: selector });
        //        return false;
        //    });
        //});

        // Contact form
        //var form = $('#main-contact-form');
        //form.submit(function(event){
        //    event.preventDefault();
        //    var form_status = $('<div class="form_status"></div>');
        //    $.ajax({
        //        url: $(this).attr('action'),
        //
        //        beforeSend: function(){
        //            form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
        //        }
        //    }).done(function(data){
        //        form_status.html('<p class="text-success">' + data.message + '</p>').delay(3000).fadeOut();
        //    });
        //});


        //goto top
        $('.gototop').click(function(event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $("body").offset().top
            }, 500);
        });

        //Pretty Photo
        $("a[rel^='prettyPhoto']").prettyPhoto({
            social_tools: false
        });
    };

    //var promo = function(){
    //    $(".fullscreen-static-image").backstretch(["assets/img-temp/promo/img1.jpg", "assets/img-temp/promo/img2.jpg"],
    //        {duration: 5000, fade:1500});
    //};
    function handleEqualHeightColumns() {
        var EqualHeightColumns = function () {
            $('.equal-height-columns').each(function() {
                var heights = [];
                $('.equal-height-column', this).each(function() {
                    $(this).removeAttr('style');
                    heights.push($(this).height()); // Write column's heights to the array
                });
                $('.equal-height-column', this).height(Math.max.apply(Math, heights)); // Find and set max
            });
        }

        EqualHeightColumns();
        $(window).resize(function() {
            EqualHeightColumns();
        });
        $(window).load(function() {
            EqualHeightColumns();
        });
    }
    var scroll = function(){
        //App.init();

        var $offset = 0;
        if ($('.one-page-nav-scrolling').hasClass('one-page-nav__fixed')) {
            $offset = $(".one-page-nav-scrolling").height()+8;
        }
        // jQuery for page scrolling feature - requires jQuery Easing plugin
        $('.page-scroll a').bind('click', function(event) {
            var $position = $($(this).attr('href')).offset().top;
            $('html, body').stop().animate({
                scrollTop: $position - $offset
            }, 600);
            event.preventDefault();
        });

        var $scrollspy = $('body').scrollspy({target: '.one-page-nav-scrolling', offset: $offset+2});

        // Collapse Navbar When It's Clickicked
        $(window).scroll(function() {
            $('.navbar-collapse.in').collapse('hide');
        });
    };

    //var handleFullscreen = function() {
    //    var WindowHeight = $(window).height();
    //    var HeaderHeight = 0;
    //
    //    if ($(document.body).hasClass('promo-padding-top')) {
    //        HeaderHeight = $('.header').height();
    //    } else {
    //        HeaderHeight = 0;
    //    }
    //
    //    $('.fullheight').css('height', WindowHeight - HeaderHeight);
    //
    //    $(window).resize(function() {
    //        var WindowHeight = $(window).height();
    //        $('.fullheight').css('height', WindowHeight - HeaderHeight);
    //    });
    //}
    //
    //var handleValignMiddle = function() {
    //    $(document).ready(function() {
    //        $('.valign__middle').each(function() {
    //            $(this).css('padding-top', $(this).parent().height() / 2 - $(this).height() / 2);
    //        });
    //    });
    //    $(window).resize(function() {
    //        $('.valign__middle').each(function() {
    //            $(this).css('padding-top', $(this).parent().height() / 2 - $(this).height() / 2);
    //        });
    //    });
    //}



})();