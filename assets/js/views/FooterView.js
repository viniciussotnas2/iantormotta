(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  define(["jquery", "underscore", "backbone", "text!templates/views/FooterView.htm", "css!styles/views/FooterView.css"], function($, _, Backbone, FooterViewTemplate) {
    var FooterView;
    return FooterView = (function(superClass) {
      extend(FooterView, superClass);

      function FooterView() {
        return FooterView.__super__.constructor.apply(this, arguments);
      }

      FooterView.prototype.el = 'footer';

      FooterView.prototype.template = _.template(FooterViewTemplate);

      FooterView.prototype.render = function() {
        this.$el.html(this.template);
        return this;
      };

      return FooterView;

    })(Backbone.View);
  });

}).call(this);
