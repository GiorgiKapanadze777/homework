def manual_pop(list, index):
    new_list = []

    for i in list:
        if i != list[index]:
            new_list.append(i)
    return new_list
    print(new_list)

print(manual_pop([1,2,3,4,5,6], -1))