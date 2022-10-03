'use strict';

const mag = 2.0;
const img_center = 180;

const img_base_width = 80 * mag;
const img_foot_width = 50 * mag;
const img_floor_width = 160 * mag;

const img_base_margin_top = 64;
const img_right_foot_margin_top = img_base_margin_top + 28 * mag;
const img_left_foot_margin_top = img_right_foot_margin_top;
const img_floor_margin_top = img_right_foot_margin_top + 35 * mag;

const img_base_margin_left = img_center - img_base_width / 2;
const img_right_foot_margin_left = img_center - (10 * mag + img_foot_width);
const img_left_foot_margin_left = img_center + 10 * mag;
const img_floor_margin_left = img_center - img_floor_width / 2;

const img_right_foot_base_transform_origin = 15 * mag + 'px ' + 43 * mag + 'px';
const img_left_foot_base_transform_origin = 65 * mag + 'px ' + 43 * mag + 'px';
const img_right_foot_transform_origin = 35 * mag + 'px ' + 15 * mag + 'px';
const img_left_foot_transform_origin = 15 * mag + 'px ' + 15 * mag + 'px';

$('#base').css({ 'width': img_base_width + 'px' });
$('#base').css({ 'margin-top': img_base_margin_top + 'px' });
$('#base').css({ 'margin-left': img_base_margin_left + 'px' });

$('#right_foot').css({ 'width': img_foot_width + 'px' });
$('#right_foot').css({ 'margin-top': img_right_foot_margin_top + 'px' });
$('#right_foot').css({ 'margin-left': img_right_foot_margin_left + 'px' });
$('#right_foot').css({ 'transform-origin': img_right_foot_transform_origin });

$('#left_foot').css({ 'width': img_foot_width + 'px' });
$('#left_foot').css({ 'margin-top': img_left_foot_margin_top + 'px' });
$('#left_foot').css({ 'margin-left': img_left_foot_margin_left + 'px' });
$('#left_foot').css({ 'transform-origin': img_left_foot_transform_origin });

$('#floor').css({ 'width': img_floor_width + 'px' });
$('#floor').css({ 'margin-top': img_floor_margin_top + 'px' });
$('#floor').css({ 'margin-left': img_floor_margin_left + 'px' });

const img_body_width = img_base_width;
const img_leg_width = img_foot_width;
const img_body_margin_top = 100;
const img_right_leg_margin_top = img_body_margin_top;
const img_left_leg_margin_top = img_body_margin_top;
const img_body_margin_left = img_base_margin_left;
const img_right_leg_margin_left = img_right_foot_margin_left;
const img_left_leg_margin_left = img_left_foot_margin_left;
const img_right_leg_transform_origin = 35 * mag + 'px ' + 25 * mag + 'px';
const img_left_leg_transform_origin = 15 * mag + 'px ' + 25 * mag + 'px';
const img_right_leg_body_transform_origin = 15 * mag + 'px ' + 25 * mag + 'px';
const img_left_leg_body_transform_origin = 65 * mag + 'px ' + 25 * mag + 'px';

$('#right_leg').css({ 'width': img_leg_width + 'px' });
$('#right_leg').css({ 'margin-top': img_right_leg_margin_top + 'px' });
$('#right_leg').css({ 'margin-left': img_right_leg_margin_left + 'px' });
$('#right_leg').css({ 'transform-origin': img_right_leg_transform_origin });

$('#left_leg').css({ 'width': img_leg_width + 'px' });
$('#left_leg').css({ 'margin-top': img_left_leg_margin_top + 'px' });
$('#left_leg').css({ 'margin-left': img_left_leg_margin_left + 'px' });
$('#left_leg').css({ 'transform-origin': img_left_leg_transform_origin });

$('#body2').css({ 'width': img_body_width + 'px' });
$('#body2').css({ 'margin-top': img_body_margin_top + 'px' });
$('#body2').css({ 'margin-left': img_body_margin_left + 'px' });
$('#body2').css({ 'transform-origin': img_right_leg_body_transform_origin });

$('img').removeClass('hidden');

function set_angle() {

  const left_foot_angle = parseInt($("#id_left_foot_angle").text());
  const right_foot_angle = parseInt($("#id_right_foot_angle").text());
  const left_leg_angle = parseInt($("#id_left_leg_angle").text());
  const right_leg_angle = parseInt($("#id_right_leg_angle").text());

  const dlt_left_foot_angle = 90 - left_foot_angle;
  const dlt_right_foot_angle = 90 - right_foot_angle;
  const dlt_left_leg_angle = left_leg_angle - 90;
  const dlt_right_leg_angle = right_leg_angle - 90;

  let left_foot_deg = left_foot_angle - 90;
  let right_foot_deg = right_foot_angle - 90;

  const l1x0 = -15 * mag;
  const l1y0 = -20 * mag;
  const l2x0 = 35 * mag;
  const l2y0 = -20 * mag;
  let l1x = Math.cos(Math.PI / 180 * left_foot_deg) * l1x0 - Math.sin(Math.PI / 180 * left_foot_deg) * l1y0;
  let l1y = Math.sin(Math.PI / 180 * left_foot_deg) * l1x0 + Math.cos(Math.PI / 180 * left_foot_deg) * l1y0;
  let l2x = Math.cos(Math.PI / 180 * left_foot_deg) * l2x0 - Math.sin(Math.PI / 180 * left_foot_deg) * l2y0;
  let l2y = Math.sin(Math.PI / 180 * left_foot_deg) * l2x0 + Math.cos(Math.PI / 180 * left_foot_deg) * l2y0;

  const r1x0 = 15 * mag;
  const r1y0 = -20 * mag;
  const r2x0 = -35 * mag;
  const r2y0 = -20 * mag;
  let r1x = Math.cos(Math.PI / 180 * right_foot_deg) * r1x0 - Math.sin(Math.PI / 180 * right_foot_deg) * r1y0;
  let r1y = Math.sin(Math.PI / 180 * right_foot_deg) * r1x0 + Math.cos(Math.PI / 180 * right_foot_deg) * r1y0;
  let r2x = Math.cos(Math.PI / 180 * right_foot_deg) * r2x0 - Math.sin(Math.PI / 180 * right_foot_deg) * r2y0;
  let r2y = Math.sin(Math.PI / 180 * right_foot_deg) * r2x0 + Math.cos(Math.PI / 180 * right_foot_deg) * r2y0;

  l1x += 25 * mag;
  l2x += 25 * mag;
  r1x -= 25 * mag;
  r2x -= 25 * mag;

  let xy = [[r1x, r1y, l1x, l1y, 0, 0], [r1x, r1y, l2x, l2y, 0, 0], [r2x, r2y, l1x, l1y, 0, 0], [r2x, r2y, l2x, l2y, 0, 0]];

  let y0_min = 10000;
  let result_index = 0;
  xy.forEach(function (elem, index) {
    let y0 = elem[1] + (0 - elem[0]) * (elem[3] - elem[1]) / (elem[2] - elem[0]);
    let yb = elem[1] + ((0 - 25 * mag) - elem[0]) * (elem[3] - elem[1]) / (elem[2] - elem[0]);
    elem[4] = y0;
    elem[5] = yb;
    if (y0_min > y0) {
      result_index = index;
      y0_min = y0;
    }
  });

  let grand_rad = Math.atan2(xy[result_index][3] - xy[result_index][1], xy[result_index][2] - xy[result_index][0]);
  let grand_deg = grand_rad * 180 / Math.PI;
  let garad_y_offset = Math.cos(grand_rad) * xy[result_index][5] + (20 * mag);

  let yx = xy.sort(function (a, b) { return (b[4] - a[4]); });

  const mode = $('input:radio[name="reference_plane"]:checked').val();

  if (mode == 'floor') {

    $('#base').css({ 'transform-origin': img_right_foot_base_transform_origin });
    const base_transrateX = 0;
    const base_transrateY = garad_y_offset;
    const base_rotate = grand_deg;
    $('#base').css({ 'transform': 'translatex(' + base_transrateX + 'px) translatey(' + base_transrateY + 'px) rotate(' + base_rotate + 'deg)' });
    const right_foot_transrateX = 0;
    const right_foot_transrateY = garad_y_offset;
    const right_foot_rotate = dlt_right_foot_angle + grand_deg;
    $('#right_foot').css({ 'transform': 'translatex(' + right_foot_transrateX + 'px) translatey(' + right_foot_transrateY + 'px) rotate(' + right_foot_rotate + 'deg)' });
    const left_foot_transrateX = (Math.cos(Math.PI / 180 * (0 - grand_deg)) - 1) * 50 * mag;
    const left_foot_transrateY = garad_y_offset - Math.sin(Math.PI / 180 * (0 - grand_deg)) * 50 * mag;
    const left_foot_rotate = dlt_left_foot_angle + grand_deg;
    $('#left_foot').css({ 'transform': 'translatex(' + left_foot_transrateX + 'px) translatey(' + left_foot_transrateY + 'px) rotate(' + left_foot_rotate + 'deg)' });

    $('#body2').css({ 'transform': 'none' });
    $('#right_leg').css({ 'transform': 'rotate(' + dlt_right_leg_angle + 'deg)' });
    $('#left_leg').css({ 'transform': 'rotate(' + dlt_left_leg_angle + 'deg)' });

  }

  if (mode == 'right_sole') {

    $('#base').css({ 'transform-origin': img_right_foot_base_transform_origin });
    $('#base').css({ 'transform': 'rotate(' + (0 - dlt_right_foot_angle) + 'deg)' });
    $('#right_foot').css({ 'transform': 'none' });
    const left_foot_transrateX = (Math.cos(Math.PI / 180 * dlt_right_foot_angle) - 1) * 50 * mag;
    const left_foot_transrateY = 0 - Math.sin(Math.PI / 180 * dlt_right_foot_angle) * 50 * mag;
    const left_foot_rotate = dlt_left_foot_angle - dlt_right_foot_angle;
    $('#left_foot').css({ 'transform': 'translatex(' + left_foot_transrateX + 'px) translatey(' + left_foot_transrateY + 'px) rotate(' + left_foot_rotate + 'deg)' });

    $('#body2').css({ 'transform-origin': img_right_leg_body_transform_origin });
    $('#body2').css({ 'transform': 'rotate(' + (0 - dlt_right_leg_angle) + 'deg)' });
    $('#right_leg').css({ 'transform': 'none' });
    const left_leg_transrateX = (Math.cos(Math.PI / 180 * dlt_right_leg_angle) - 1) * 50 * mag;
    const left_leg_transrateY = 0 - Math.sin(Math.PI / 180 * dlt_right_leg_angle) * 50 * mag;
    const left_leg_rotate = dlt_left_leg_angle - dlt_right_leg_angle;
    $('#left_leg').css({ 'transform': 'translatex(' + left_leg_transrateX + 'px) translatey(' + left_leg_transrateY + 'px) rotate(' + left_leg_rotate + 'deg)' });

  }

  if (mode == 'left_sole') {

    $('#base').css({ 'transform-origin': img_left_foot_base_transform_origin });
    $('#base').css({ 'transform': 'rotate(' + (0 - dlt_left_foot_angle) + 'deg)' });
    const right_foot_transrateX = (1 - Math.cos(Math.PI / 180 * dlt_left_foot_angle)) * 50 * mag;
    const right_foot_transrateY = Math.sin(Math.PI / 180 * dlt_left_foot_angle) * 50 * mag;
    const right_foot_rotate = dlt_right_foot_angle - dlt_left_foot_angle;
    $('#right_foot').css({ 'transform': 'translatex(' + right_foot_transrateX + 'px) translatey(' + right_foot_transrateY + 'px) rotate(' + right_foot_rotate + 'deg)' });
    $('#left_foot').css({ 'transform': 'none' });

    $('#body2').css({ 'transform-origin': img_left_leg_body_transform_origin });
    $('#body2').css({ 'transform': 'rotate(' + (0 - dlt_left_leg_angle) + 'deg)' });
    const rignt_leg_transrateX = (1 - Math.cos(Math.PI / 180 * dlt_left_leg_angle)) * 50 * mag;
    const rignt_leg_transrateY = Math.sin(Math.PI / 180 * dlt_left_leg_angle) * 50 * mag;
    const right_leg_rotate = dlt_right_leg_angle - dlt_left_leg_angle;
    $('#right_leg').css({ 'transform': 'translatex(' + rignt_leg_transrateX + 'px) ' + 'translatey(' + rignt_leg_transrateY + 'px) ' + 'rotate(' + right_leg_rotate + 'deg)' });
    $('#left_leg').css({ 'transform': 'none' });

  }

  if (mode == 'body') {

    $('#base').css({ 'transform': 'none' });
    $('#right_foot').css({ 'transform': 'rotate(' + dlt_right_foot_angle + 'deg)' });
    $('#left_foot').css({ 'transform': 'rotate(' + dlt_left_foot_angle + 'deg)' });

    $('#body2').css({ 'transform': 'none' });
    $('#right_leg').css({ 'transform': 'rotate(' + dlt_right_leg_angle + 'deg)' });
    $('#left_leg').css({ 'transform': 'rotate(' + dlt_left_leg_angle + 'deg)' });

  }

}

$(function () {
  $('div[name="angle"]').on('DOMSubtreeModified propertychange', function () {
    if ($(this).text().length > 0) {
      set_angle();
    }
  });
});

$(function () {
  $('input[name="reference_plane"]').change(function () {
    set_angle();
  });
});

$('input[type="number"]').bind('input', function () {
  set_angle();
});

$("#id_reset_leg_angle").click(function () {
  $("#id_left_leg_angle").text("90");
  $("#id_right_leg_angle").text("90");
  set_angle();
});

$("#id_reset_foot_angle").click(function () {
  $("#id_left_foot_angle").text("90");
  $("#id_right_foot_angle").text("90");
  set_angle();
});

let continuous_btn = '';
let timeoutID = null;

function incdec(btn, out) {
  let v = parseInt($("#" + out).text());
  if (isNaN(v)) {
    v = 90;
  }
  if ($("#" + btn).text() == '+') {
    if (v < 180) {
      ++v;
    } else {
      v = 180;
    }
    $("#" + out).text(v);
  } else {
    if (v > 0) {
      --v;
    } else {
      v = 0;
    }
    $("#" + out).text(v);
  }
  set_angle();
}

function tover_next(btn, out) {
  timeoutID = setTimeout(function () {
    incdec(btn, out);
    tover_next(btn, out);
  }, 100);
}

function timerset_incdec(btn, out) {
  incdec(btn, out);
  timeoutID = setTimeout(function () {
    incdec(btn, out);
    tover_next(btn, out);
  }, 600);
}

function clearRepeatBtn() {
  continuous_btn = '';
  clearTimeout(timeoutID);
}

$(function () {
  $('#id_inc_right_leg').on('touchstart mousedown', function (e) {
    event.preventDefault();
    timerset_incdec('id_inc_right_leg', 'id_right_leg_angle');
  });
  $('#id_inc_right_leg').on('touchend mouseup mouseout', function (e) {
    event.preventDefault();
    clearRepeatBtn();
  });

  $('#id_dec_right_leg').on('touchstart mousedown', function (e) {
    event.preventDefault();
    timerset_incdec('id_dec_right_leg', 'id_right_leg_angle');
  });
  $('#id_dec_right_leg').on('touchend mouseup mouseout', function (e) {
    event.preventDefault();
    clearRepeatBtn();
  });

  $('#id_inc_left_leg').on('touchstart mousedown', function (e) {
    event.preventDefault();
    timerset_incdec('id_inc_left_leg', 'id_left_leg_angle');
  });
  $('#id_inc_left_leg').on('touchend mouseup mouseout', function (e) {
    event.preventDefault();
    clearRepeatBtn();
  });

  $('#id_dec_left_leg').on('touchstart mousedown', function (e) {
    event.preventDefault();
    timerset_incdec('id_dec_left_leg', 'id_left_leg_angle');
  });
  $('#id_dec_left_leg').on('touchend mouseup mouseout', function (e) {
    event.preventDefault();
    clearRepeatBtn();
  });

  $('#id_inc_right_foot').on('touchstart mousedown', function (e) {
    event.preventDefault();
    timerset_incdec('id_inc_right_foot', 'id_right_foot_angle');
  });
  $('#id_inc_right_foot').on('touchend mouseup mouseout', function (e) {
    event.preventDefault();
    clearRepeatBtn();
  });

  $('#id_dec_right_foot').on('touchstart mousedown', function (e) {
    event.preventDefault();
    timerset_incdec('id_dec_right_leg', 'id_right_foot_angle');
  });
  $('#id_dec_right_foot').on('touchend mouseup mouseout', function (e) {
    event.preventDefault();
    clearRepeatBtn();
  });

  $('#id_inc_left_foot').on('touchstart mousedown', function (e) {
    event.preventDefault();
    timerset_incdec('id_inc_left_foot', 'id_left_foot_angle');
  });
  $('#id_inc_left_foot').on('touchend mouseup mouseout', function (e) {
    event.preventDefault();
    clearRepeatBtn();
  });

  $('#id_dec_left_foot').on('touchstart mousedown', function (e) {
    event.preventDefault();
    timerset_incdec('id_dec_left_leg', 'id_left_foot_angle');
  });
  $('#id_dec_left_foot').on('touchend mouseup mouseout', function (e) {
    event.preventDefault();
    clearRepeatBtn();
  });

});
