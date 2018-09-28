// Compiled using marko@4.13.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/tmpmarko$1.0.0/template.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    included_file_template = marko_loadTemplate(require.resolve("./included-file.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<h1>" +
    marko_escapeXml(input.title) +
    "</h1><p>Some text BEFORE the include</p>");

  include_tag({
      _target: included_file_template,
      _arg: input
    }, out, __component, "2");

  out.w("<p>Some text AFTER the include</p>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/tmpmarko$1.0.0/template.marko",
    tags: [
      "./included-file.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
