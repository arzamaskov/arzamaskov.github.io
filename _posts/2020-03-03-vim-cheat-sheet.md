---
layout: post
title: Шпаргалка по Vim
date: 2021-03-17 17:30
summary: Сочетания клавиш, настройки и лайфхаки для редактора Vim (Neo Vim)
read_more:
categories: настройки
tags:
    - brew
    - vim
---

## Перемещение по экрану

^E - scroll the window down
^Y - scroll the window up
^F - scroll down one page
^B - scroll up one page
H - move cursor to the top of the window
M - move cursor to the middle of the window
L - move cursor to the bottom of the window
gg - go to top of file
G - go to bottom of file

## Text objects

w - word
s - sentence
p - paragraph
t - tag (available in HTML or XML files)

## Motions

a - all
i - in
t - `til
f - find forward
F - find backward

## Commands

d - delete (also cut)
c - change (delete, then place in insert mode)
y - yank (copy)
v - visually select

{command}{text object or motion}

w - move forward by Word
b - move Backward by word
e - go to end of the word

diw - delete in word
caw - change all word
yi) - copy all text inside parentheses
dt" - delete until doublequotes 
df" - delete until doublequotes including doublequotes 
va' - visually select all inside singlequotes including singlequotes 
. - repeat the last command

