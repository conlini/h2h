# h2h
to setup
--------
1.  Install python 2.7
2. install pip
3. install virtualenv
4. virtualenv env
5. source env/bin/activate
6. pip install django fake-factory
7. python manage.py syndb
8. you can skip admin account setup
9. python manage.py mockingest <mock_data_file_path?


Mock data
-------
There is a sample mock data in h2h/tech/management/commands/data.txt

To generate new sample data -
1. Open _SampleGenerator.py
2. Add/Modify/Remove any data. Some notes on what each array is present
3. run the _SampleGenerator
4. Save output to file as is. Do not wrap in braces
5. Run step 9 from above(make sure virtualenv is active source env/bin/activate)


To Run
------
1. source env/bin/activate
2. python manage.py runserver [host or port:host]

urls
http://localhost:port/tech/rest/filters
http://localhost:port/tech/rest/query POST with payload as 
        {
            "query" : [{"att_name" : "[]"}]

        }
        
each att_name object follows the following standard
att_name : [0, 100] Ranges
att_name : [key1, key2 , key3] for textual
att_name : [True/False] for Boolean
        
sample 
{
        "query" : [
                {"write speed" : [0, 10000]},
                {"type" : ["search"]}
                ]
}
