$ ->
  $('a').live 'click', ->
    if $(this).attr('href')[0] == '/'
      url = 'https://twitter.com' + $(this).attr('href')
    else
      url = $(this).attr('href')

    url = url.replace(/mobile\.twitter\.com/, 'twitter.com')

    chrome.tabs.create
      url: url

    window.close()
    false

  $.ajax
    url: 'https://mobile.twitter.com/macanai'
    dataType: 'html'
  .success (html) ->

    tweet = $(html).find('.tweet:eq(0)')
    $('body').append tweet
