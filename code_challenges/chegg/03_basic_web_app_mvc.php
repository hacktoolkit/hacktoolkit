<?php
  // Response to Challenge Question 3
  // author: hello@jontsai.com
  // date: 2009.04.15
  //
  // Write a basic web application, following the Model-View-Controller/Modular design pattern. The following URLs should be functional:
  // http://www.server.com/index.php?page=showTime - Displays the current system time.
  // http://www.server.com/index.php?page=showDate - Displays the current system date.
  // http://www.server.com/index.php?page=showVersion - Displays the current PHP / Java version.

  // Each page should be represented by an individual class. Any of the following languages can be used: PHP

$page_renderers = array(
                        "showTime" => TimePage,
                        "showDate" => DatePage,
                        "showVersion" => VersionPage,
                        "showError" => ErrorPage
                        );

/**
 * pageControl
 *
 * this is where everything gets started
 */
function pageControl() {
    global $page_renderers;
    $page_type = $_GET['page'];

    $renderer_class = $page_renderers[$page_type];

    if ($renderer_class) {
        renderPage($renderer_class);
    } else {
        renderPage(ErrorPage);
    }
}

/**
 * renderPage
 *
 * renders the current page
 */
function renderPage($renderer_class) {
    $page = new $renderer_class();
    $page->render();
}

require("BasePageTemplate.class.php");

/**
 * HtmlPage
 * every page in this app is based off this one for style
 * BasePageTemplate is an even more generic class
 *
 */
class HtmlPage extends BasePageTemplate {
    var $title = "DEFAULT TITLE";

    function render_head_section() {
    }
    function render_content() {
    }
    function render_post_javascript() {
    }
    function render() {
?>

<html>

<head>
<title><?=$this->title?></title>
<?
        $this->render_head_section();
?>
</head>

<body>
<h1><?=$this->title?></h1>
by Jonathan Tsai &lt;jontsai at cal dot berkeley dot edu&gt;
<br/>
<br/>

<?
        $nav_links = getNavLinks();
?>

<?=$nav_links?>
<hr/>

<?
        $this->render_content();
        $this->render_post_javascript();
?>

<hr/>
<?=$nav_links?>
</body>
</html>
<?
    }
}

class TimePage extends HtmlPage {
    var $title = "Time Page";

    function currentTime() {
        $phrase = "The current system time is (ISO 8601): [".date("c")."]";
        return $phrase;
    }
    function render_content() {
        echo $this->currentTime();
    }
}

/**
 * Date Page
 *
 */
class DatePage extends HtmlPage {
    var $title = "Date Page";

    function currentDate() {
        $phrase = "The current system date is: [".date("l, F j, Y")."]";
        return $phrase;
    }
    function render_content() {
        echo $this->currentDate();
    }
}

/**
 * Version Page
 *
 */
class VersionPage extends HtmlPage {
    var $title = "Version Page";

    function render_content() {
        echo "The PHP version: [".phpversion()."]";
    }
}

/**
 * ErrorPage
 *
 */
class ErrorPage extends HtmlPage {
    var $title = "Error Page";
    
    function render_content() {
        echo "Oops! Invalid page reached. Please go back";
    }
}

/**
 * getNavLinks
 *
 * return the links for this app as an HTML string
 */
function getNavLinks() {
    global $page_renderers;

    $links = array();
    foreach ($page_renderers as $page_type => $renderer_class) {
        if ($page_type != "showError") {
            $short_name = preg_replace("/show/", "", $page_type);
            $links[] = "<a href=\"?page=".$page_type."\">".$short_name."</a>";
        }
    }
    //print_r($links);
    return join(" | ", $links);
}

pageControl();

?>
