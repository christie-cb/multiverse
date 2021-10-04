<?php

class Wrapper {
    public function wrap($text, $maxLineLength) {
        $output = "";
        $i = 0;
        while ($i < strlen($text)) {
            $output = $output . substr($text, $i, $maxLineLength) . "\n";
            $i += $maxLineLength;
        }
        return substr($output, 0, -1); // drop the trailing \n
    }
}
