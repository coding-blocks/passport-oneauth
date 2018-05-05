/**
 * Created by tech4GT on 8/21/17.
 */

exports.parse = function(json) {
    if ('string' === typeof json) {
        json = JSON.parse(json);
    }

    var profile = {};
    profile.id = String(json.id);
    profile.username = json.username;
    profile.name = json.firstname + " " + json.lastname;
    profile.email = json.email;
    profile.role = json.role;
    profile.photo = json.photo;
    profile.verifiedemail = json.verifiedemail;
    if(json.userfacebook) profile.facebook = json.userfacebook;
    if(json.usergithub) profile.github = json.usergithub;
    if(json.usertwitter) profile.twitter = json.usertwitter;
    if(json.userlms || json.userlm) profile.lms = json.userlms || json.userlm;
    return profile;
};