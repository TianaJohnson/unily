<!-- DIRECTORY -->
<!-- LIST -->
<div class="modern-search-center__list__item modern-search-center__list__item__people fadeIn ng-animate-disabled" ng-if="modeAlias==='list'" ng-class="document.openGraphSummary.type">
    <a ng-href="{{document.Url}}" class="modern-search-center__list__item__left">
        <span class="modern-search-center__list__item__icon">{{::document.ResultType | abbreviate }}</span>
    </a>
    <div class="modern-search-center__list__item__body">
        <a ng-href="{{::document.Url}}" class="modern-search-center__list__item__title" ng-attr-target="{{document.Internal_Url ? '_self' : '_blank'}}" ng-if="!renderForPlatforms('Mobile')">
            <span ng-if="!document.hitHighlights.displayName">{{::document.Name}}</span>
            <span ng-repeat="name in document.hitHighlights.displayName"><span ng-bind-html="name"></span></span>
        </a>
        <a ng-href="{{::document.Url}}" class="modern-search-center__list__item__title ellipsis" ellipsis="" ng-attr-target="{{document.Internal_Url ? '_self' : '_blank'}}" ng-if="renderForPlatforms('Mobile')">
            <span ng-if="!document.hitHighlights.displayName">{{::document.Name}}</span>
            <span ng-repeat="name in document.hitHighlights.displayName"><span ng-bind-html="name"></span></span>
        </a>
        <ul class="modern-search-center__list__item__details">
            <li ng-if="document.Location">{{::document.Location}}</li>
        </ul>
        <ul class="modern-search-center__list__item__details">
            <li ng-if="document.Email"><a ng-href="{{::document.Email}}">{{::document.Email}}</a></li>
            <li ng-if="document.Phone">
                <span ng-if="!renderForPlatforms('Mobile')">{{::document.Phone}}</span>
                <a ng-if="renderForPlatforms('Mobile')" ng-href="tel:{{::document.PhoneInTelFormat}}">{{::document.Phone}}</a>
             </li>
        </ul>
    </div>
</div>
<!--CARD-->
<div class="modern-search-center__card fadeIn ng-animate-disabled" ng-if="modeAlias === 'grid'">
    <div class="profile-img">
        <a ng-href="{{document.Internal_Url || document.Url}}" class="modern-search-center__card__circle icon" ng-attr-target="{{document.Internal_Url ? '_self' : '_blank'}}">
            <span class="modern-search-center__card__icon">{{::document.ResultType | abbreviate }}</span>
        </a>
    </div>
    <a ng-href="{{::(document.Internal_Url || document.Url)}}" class="modern-search-center__card__title" ng-attr-target="{{document.Internal_Url ? '_self' : '_blank'}}">
        <span>{{::document.Name}}</span>
    </a>
    <div class="modern-search-center__card__details"><span>{{::document.Location}}</span></div>
    <a class="modern-search-center__card__details" ng-href="mailto:{{::document.Email}}"><span><span class="truncate">{{::document.Email}}</span><span></a>
    <ul class="modern-search-center__card__mini-icons" ng-if="document.Url || document.Internal_Url || document.Building">
       <li ng-if="document.Url"><a ng-href="{{::document.Url}}" target="_blank" class="icomoon-new-tab icon"><span class="sr-only">External website {{'Placeholder.NewTab' | term}}</span></a></li>
       <li ng-if="document.Internal_Url"><a ng-href="{{::document.Internal_Url}}" target="_self" class="icomoon-link icon"><span class="sr-only">Internal website {{'Placeholder.NewTab' | term}}</span></a></li>
       <li ng-if="document.Building"><a ng-href="https://campusmap.stthomas.edu/?{{::document.Building}}" target="_blank" class="icomoon-map icon"><span class="sr-only">Campus Map location {{'Placeholder.NewTab' | term}}</span></a></li>
    </ul>
    <ul class="modern-search-center__card__list">
        <li ng-if="document.Phone">
            <span ng-if="!renderForPlatforms('Mobile')">{{::document.Phone}}</span>
            <a ng-if="renderForPlatforms('Mobile')" ng-href="tel:{{::document.PhoneInTelFormat}}">{{::document.Phone}}</a>
        </li>
    </ul>
</div>
