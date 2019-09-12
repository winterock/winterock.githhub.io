---
title: Org Mode Cheatsheet
---

- [Org Mode Cheatsheet](#sec-1)
  - [Syntax](#sec-1-1)
    - [Emphasis and mono-space](#sec-1-1-1)
    - [Paragraphs](#sec-1-1-2)
    - [Source Code Block](#sec-1-1-3)
  - [Todo `[C-c C-t]`](#sec-1-2)
    - [Insert Structural Template `[C-c C-,]`](#sec-1-2-1)
    - [Time](#sec-1-2-2)
    - [Sort `[C-c ^]`](#sec-1-2-3)
    - [Tricks](#sec-1-2-4)


# Org Mode Cheatsheet<a id="sec-1"></a>

## Syntax<a id="sec-1-1"></a>

### Emphasis and mono-space<a id="sec-1-1-1"></a>

**bold**, *italic*, <span class="underline">underlined</span>, `verbatim` and `code`,

### Paragraphs<a id="sec-1-1-2"></a>

<p class="verse">
Great clouds overhead<br />
Tiny black birds rise and fall<br />
Snow covers Emacs<br />
<br />
&#xa0;&#xa0;&#x2014;AlexSchroeder<br />
</p>

> Everything should be made as simple as possible, but not any simpler &#x2014;Albert Einstein

<div class="org-center">
Everything should be made as simple as possible, but not any simpler
</div>

### Source Code Block<a id="sec-1-1-3"></a>

[Python Example](./python-example)

## TODO Todo `[C-c C-t]`<a id="sec-1-2"></a>

### Insert Structural Template `[C-c C-,]`<a id="sec-1-2-1"></a>

Edit `[C-c ']` Eval `[C-c C-c]`

```python
def simplest_func ():
    print "Easy"
simplest_func()
```

### Time<a id="sec-1-2-2"></a>

1.  `S-[up/down]` to change date
2.  `[C-c .]`

### Sort `[C-c ^]`<a id="sec-1-2-3"></a>

### Tricks<a id="sec-1-2-4"></a>

-   [-] Check Box <code>[1/2]</code>
    1.  Insert a check box with `M + S + Ret`
    2.  [ ] Toggle Checkout `[C-c C-c]`
    3.  [X] Hey
    4.  Re-index `[C-c C-c]`
-   Plain List
    1.  Sub 1
    2.  blablabla
