// Khi sử dụng các component của Bootstrap
// 1. Cấu trúc (HTML)

/**
 * Accordion Wrapper
 *      Items
 *          Header
 *              Button
 *          Collapse
 *              Body
 */

// 2. Class (liên quan đến CSS) không thẻ thay đổi

// 3. ID và các thuộc tính tùy chỉnh (data-*), ví dụ: data-bs-toggle, data-bs-target,... thì có thể thay đổi, nhưng lưu ý thay đổi đồng bộ
// 4. Bên trong các phần nội dung thì có thể tùy ý sử dụng các phần tử, boostrap class, layout,...

/**
 * .carousel | Class cross-fade | data-bs-ride
 *      .carousel-indicator | data-bs-target | data-bs-slide-to
 *      .carousel-nner
 *          .carousel-tems | data-bs-interval
 *              .carousel-caption
 *      .carousel-control-prev | data-bs-target | data-bs-slide
 *      .carousel-control-next | data-bs-target | data-bs-slide
 */


/**
 * data-target | data-bs-toggle
 * 
 * .modal | data-bs-backdrop | data-bs-keyboard
 *      .modal-dialog
 *          .modal-content
 *              .modal-header
 *                  .modal-title
 *                  .btn-close | data-bs-close
 *              .modal-body
 *              .modal-footer
 *          
 */



/**
 * .navbar, .navbar-expand-*
 *      .container-*
 *          .navbar-brand
 *          .navbar-toggler | data-bs-toggle | data-bs-target (content)
 *          .navbar-collapse, .collapse, id (data-bs-target)
 *              .navbar-nav
 */


// collapse button | logo | user dropdown

/**
 * Form validation
 * - Validate mặc định của trình duyệt (sử dụng các thuộc tính required, min, max,...)
 * - Sử dụng API checkValidality() - novalidate và .need-validate(form)
 * - Sử dụng các class .is-valid và .is-invalid
 * 
 */