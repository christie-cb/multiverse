<?php declare(strict_types=1);
use PHPUnit\Framework\TestCase;
require_once dirname(__FILE__) . '/../src/Wrapper.php';

final class WrapperTest extends TestCase {
    function testCanCreateAWrapper() {
        $wrapper = new Wrapper();
    }
}
