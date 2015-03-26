Template.badge_builder.origin = () ->
  return Meteor.absoluteUrl()

Template.badge_builder.rendered = ->
  window.onmessage = (e) ->
    if(e.origin == "https://www.openbadges.me")
      imageData = e.data
      name = $("#badgename input").val()
      if(name != "")
        badgeData = JSON.parse(imageData)
        badgeData.name = name
        console.log(badgeData)
        Meteor.call("createBadge", badgeData)
        $("#badgedesigner").attr("src", $("#badgedesigner").attr("src"))
        $("#badgename input").val('')
        $("#badgename .warning").css('visibility', 'hidden')
      else
        $("#badgename .warning").css('visibility', 'visible')

