---
title: References Overview
shortTitle: Overview
date: 2024-05-08T02:56:39+08:00
description: Overview of FixIt theme's open API references.
collections:
  - References
keywords:
  - API
  - Reference
---

This page provides an overview of the FixIt theme's open API references, covering the JavaScript public API, SCSS customization API, and Hugo template extension points.

<!--more-->

## JavaScript API

The FixIt theme exposes a typed public API via `window.fixit` for custom scripts. It includes service modules, an event bus, and configuration types. See the [JavaScript API Reference](/references/javascript/) for details.

## SCSS API

The FixIt theme provides SCSS functions, mixins, variables, and CSS custom properties for advanced style customization. Use them in your `assets/scss/custom.scss`. See the [SCSS API Reference](/references/scss/) for details.

## Open Custom Blocks

The FixIt theme opens custom template blocks that you can use to extend the theme's functionality without modifying core files. See the [Open Custom Blocks Reference]({{< relref "blocks" >}}) for details.

## Hugo Partials

Reference for FixIt's Hugo partials (`layouts/_partials/`), covering parameters, return values, and usage examples for template functions, plugins, and layout components. See the [Hugo Partials Reference]({{< relref "partials" >}}) for details.
