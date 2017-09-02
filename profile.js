/**
 * Created by tech4GT on 8/21/17.
 */

exports.parse = function(json) {
    if ('string' == typeof json) {
        json = JSON.parse(json);
    }
    console.log(json)

    var profile = {};
    profile.id = String(json.id);
    profile.name = json.firstname + " " + json.lastname;
    profile.email = json.email;
    profile.role = json.role;
    return profile;
};