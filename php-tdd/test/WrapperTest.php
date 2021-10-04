<?php declare(strict_types=1);
use PHPUnit\Framework\TestCase;
require_once dirname(__FILE__) . '/../src/Wrapper.php';

final class WrapperTest extends TestCase {
    private $wrapper;
    
    protected function setUp(): void {
       $this -> wrapper = new Wrapper();
    }

    function testDoesNotWrapShortWord() {
        $text = 'word';
        $maxLineLength = 5;
        $this -> assertEquals($text, $this->wrapper->wrap($text, $maxLineLength));
    }

    function testWrapsEmptyString() {
        $this -> assertEquals('', $this->wrapper->wrap('', 0));
        $this -> assertEquals('', $this->wrapper->wrap('', 1));
    }
    
    function testWrapsLongWord() {
        $text = 'ALongWord';
        $maxLineLength = 5;
        $this -> assertEquals("ALong\nWord", $this->wrapper->wrap($text, $maxLineLength));
    }

    function testWrapsLongSentence() {
        $text = 'A Long One';
        $maxLineLength = 2;
        $this -> assertEquals("A \nLo\nng\n O\nne", $this->wrapper->wrap($text, $maxLineLength));
    }
}

