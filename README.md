SORTING ALGORITHMS

1. BUBBLE SORT

  i. ELI5 Explanation:

    You can use a Bubble Sorting Algorithm to find out who is tallest in your class!
    First, everyone gets into a line.
    Compare the first two people in line; if the person on the end is shorter, that person stays in place, if that person is taller, they switch places.
    Now the taller person checks their height against the next person in line, and if they are shorter, they will stay in place and the next person will go on to compare; if they are taller, they will switch places with that person too.
    Continue all the way to the end until the last person has no one next to compare to.
    Now start at the beginning of the line again and repeat.
    Once everyone is in the correct order, go through and compare one more time, just to be sure. You've completed a bubble sort!

  ii. Psuedo code:

    myRandomArray = [4,5,2,1,3]

    declare a bubble sort function
      declare a boolean variable to gauge if the array is sorted, set to false
      set a while loop to continue until the array is sorted
        declare a variable to track the individual swaps performed, set to 0
        iterate over the length of the array
        declare a variable named 'current', set to # of iterations
        declare a variable named 'next', set to # iterations + 1
        if current is greater than next, swap current and next
          increase number of swaps
        if no swaps were performed, change boolean variable to true, which breaks the while loop
    return the sorted array

    myRandomArray = [1,2,3,4,5]

  iii. In My Own Words: Describe Best Case, Worst Case

    Best Case Scenario: a sorted array
      The Bubble Sort algorithm will make 2 passes, the first to see if any swaps need to be made, the second to be sure no swaps have been made. This gives it an O(N) complexity at its best because it will only have to go through twice.

    Worst Case Scenario: an array with values that are each less than the next, a backwards sorted array
      The Bubble Sort algorithm will have to make a swap for each number then, an additional pass to ensure no swaps have been made. Worst case complexity is O(N^2).


2. QUICK SORT

  i. ELI5 Explanation:

    You can use a quick-sorting algorithm to find out who is tallest in your class!
    First, have everyone line up together in a straight line.
    Next, pick a volunteer--they will be the one who everyone is compared to.
    The volunteer will walk down the line of your classmates where each person will either go into a separate 'taller' line on the right or a separate 'shorter' line on the left, depending if they are taller or shorter than the volunteer. The volunteer will stay in the middle between the 'taller' and 'shorter' lines but will not be part of the line again until the end.
    Now, repeat the process so each line has it's own volunteer and compare the rest of your classmates in that line.
    Keep separating the lines and picking volunteers until each line only has one person.
    Next, everybody goes back into one big line, starting from the left line, then the volunteer, then the right line until everyone is back in line!

  ii. Psuedo Code:

    declare a quicksort function
      declare a variable to set the pivot point at a set index of the array
      (I set mine at at index 0 but it could be set at the length -1 or the length / 2)
      declare two empty arrays for the left and the right comparisons
      set base case: if the array length is 0, return an empty array
      set additional case: if array length is 1, return the array
      iterate over the array, starting at index 1
        if array[i] is less than the pivot, push array[i] to left array
        if array[i] is greater than the pivot, push array[i] to right array
    set left array to equal the result of the quicksort function on the left array
    set right array to equal the result of the quicksort function on the right array
    (this breaks the array down into little arrays until there's only one value in each array)
    return left array + pivot + right array

  iii. In My Own Words: Describe Best Case, Worst Case

    Best Case Scenario: the pivot is the middle value each time
      If the pivot is exactly in the middle, it is breaking the array in half each time it runs an iteration, causing it to take on an O(logN) complexity and reduce the times it needs to iterate.

    Worst Case Scenario: the pivot is the smallest value or largest value each time
      The point of the pivot is to break the array up into smaller arrays which are each broken down until there is only one value in each array. If the pivot point is always the smallest or largest, the array is not broken down at all except for the pivot being removed. It takes O(N^2) complexity and takes the longest amount of time to complete.

3. MERGE SORT

  i. ELI5 Explanation:

    Let's say you have a stack of small 4 boxes and you need to put them in order from lightest to heaviest, but you can only compare two at a time. You can perform a merge sort!
    First you will split up the boxes into two stacks, then split each of those stacks into two stacks. Now you have 4 different stacks with one box each.
    Pick up one box in each hand so you're holding two boxes, and compare which one is heavier. Put the heavier one on the right side, and the lighter one on the left side. Now do the same for the other two boxes. At this point you should have two sets of boxes with two boxes each.
    Now compare each of the boxes that are on the left side of their piles, and put the lighter one in a new stack.
    Compare the remaining left side box with the single right box, whichever is lighter will go in the stack in the new stack. Compare the last remaining boxes and add the lighter one to the new stack and then the last box. Now you've sorted the boxes by weight using a merge sort!

  ii. Pseudo Code:

    declare a quicksort function
    declare a merge function after the quicksort function
    set base case: if the array length is zero, return an empty array
    set additional base case: if the array length is one, return the array
    declare two variables set to empty arrays for the left and right side comparison
    iterate over the array
      if the index is even, push that value to the left side
      if the index is odd, push that value to the right side
    call the quicksort function on the left side
    call the quicksort function on the right side
    (this will break the array down into smaller arrays until each only has one value inside)
    return the merge function with the left array and right array as arguments

    enter the merge function
      declare a variable set to an empty array for the final sorted array
      create a while loop to continue while the left array and the right array are greater than zero
        if the value of the left array at index 0 is greater than the value of the right array at index 0, push the value at the 0 index of the left array into the result array.
        if the right one is less, push the right one into the array.
      create a while loop to continue while left array is greater than zero
        remove the first index of the array and push it into the resulting array
      create a while loop for the right array as well
        remove the first index and push it into the resulting array
      return the result

  iii. In My Own Words: Describe Best Case, Worst Case

    Best Case Scenario: The merge sort algorithm's best scenario is if the array is categorized by an O(N) complexity because it has to compare each value against another, even though it breaks the original array into smaller pieces, it still compares them one at a time.

    Worst Case Scenario: The worst case scenario for the merge sort is