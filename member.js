function skillsMember(){
    return{
        restrict: "E",
        templateUrl: "modules/skills/views/member.html",
        controller: "SkillMemberController",
        controllerAs: "vm",
        bndToController: "true",
        scope: {
            member: "="
        }
    }
}