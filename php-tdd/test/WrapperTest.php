<?php declare(strict_types=1);
use PHPUnit\Framework\TestCase;
require_once dirname(__FILE__) . '/../src/Wrapper.php';

final class WrapperTest extends TestCase {
    function testDoesNotWrapAWordShorterThanMaxChar() {
        $wrapper = new Wrapper();
        $this -> assertEquals('word', $wrapper->wrap('word', 5));
    }
}